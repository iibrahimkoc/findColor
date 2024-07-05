/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

export default function SaveColorScreen() {
  const [selectedBox, setSelectedBox] = useState('Colors');
  const [boxStartColor1, setBoxStartColor1] = useState('black');
  const [boxStartColor2, setBoxStartColor2] = useState('black');

  const colorArray = Array(25).fill(0);

  function rastgeleRenk() {
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);
    return 'rgb(' + Red + ',' + Green + ',' + Blue + ')';
  }

  function rgbToHex(rgb) {
    var hexIndex1 = Math.floor(rgb[0] / 16);
    var hexIndex2 = rgb[0] % 16;
    var hexIndex3 = Math.floor(rgb[1] / 16);
    var hexIndex4 = rgb[1] % 16;
    var hexIndex5 = Math.floor(rgb[2] / 16);
    var hexIndex6 = rgb[2] % 16;
    if (hexIndex1 > 9) {
      hexIndex1 = harfDonustur(hexIndex1);
    }
    if (hexIndex2 > 9) {
      hexIndex2 = harfDonustur(hexIndex2);
    }
    if (hexIndex3 > 9) {
      hexIndex3 = harfDonustur(hexIndex3);
    }
    if (hexIndex4 > 9) {
      hexIndex4 = harfDonustur(hexIndex4);
    }
    if (hexIndex5 > 9) {
      hexIndex5 = harfDonustur(hexIndex5);
    }
    if (hexIndex6 > 9) {
      hexIndex6 = harfDonustur(hexIndex6);
    }
    return (
      '#' +
      hexIndex1 +
      hexIndex2 +
      hexIndex3 +
      hexIndex4 +
      hexIndex5 +
      hexIndex6
    );
  }
  function harfDonustur(value) {
    switch (value) {
      case 10:
        return 'A';
      case 11:
        return 'B';
      case 12:
        return 'C';
      case 13:
        return 'D';
      case 14:
        return 'E';
      case 15:
        return 'F';
    }
  }

  return (
    <SafeAreaView>
      <View style={[styles.box1]}>
        <Shadow distance={0} startColor={boxStartColor1} offset={[10, 5]}>
          <TouchableOpacity
            style={[
              styles.boxButton,
              selectedBox === 'Colors' ? styles.boxButtonActive : null,
            ]}
            onPress={() => {
              setSelectedBox('Colors');
              setBoxStartColor1('black');
              setBoxStartColor2(undefined);
            }}>
            <Text
              style={[
                styles.boxText,
                selectedBox === 'Colors' ? styles.boxTextActive : null,
              ]}>
              Colors
            </Text>
          </TouchableOpacity>
        </Shadow>
        <Shadow distance={0} startColor={boxStartColor2} offset={[10, 5]}>
          <TouchableOpacity
            style={[
              styles.boxButton,
              selectedBox === 'Palets' ? styles.boxButtonActive : null,
            ]}
            onPress={() => {
              setSelectedBox('Palets');
              setBoxStartColor1(undefined);
              setBoxStartColor2('black');
            }}>
            <Text
              style={[
                styles.boxText,
                selectedBox === 'Palets' ? styles.boxTextActive : null,
              ]}>
              Palettes
            </Text>
          </TouchableOpacity>
        </Shadow>
      </View>
      <ScrollView
        style={{height: phoneHeight - 150}}
        contentInsetAdjustmentBehavior="automatic">
        {colorArray.map((value, index) => {
          const renk = rastgeleRenk();
          const rgb = renk.match(/\d+/g);
          let brightness;
          let textColor = 'black';
          if (rgb) {
            brightness =
              (parseInt(rgb[0]) * 299 +
                parseInt(rgb[1]) * 587 +
                parseInt(rgb[2]) * 114) /
              1000;
            textColor = brightness >= 128 ? 'black' : 'white';
          }

          const hex = rgbToHex(rgb);
          return (
            <Shadow
              key={index}
              style={{width: '100%'}}
              distance={0}
              endColor="black"
              offset={[5, 7]}>
              <View style={[styles.colorBox, {backgroundColor: renk}]}>
                <View style={styles.colorBoxRow}>
                  <Text style={[styles.dinamicTextColor, {color: textColor}]}>
                    {hex}
                  </Text>
                  <Text style={[styles.dinamicTextColor, {color: textColor}]}>
                    {renk}
                  </Text>
                </View>
                <View style={styles.colorBoxRow}>
                  <Text style={[styles.dinamicTextColor, {color: textColor}]}>
                    Renk İsmi
                  </Text>
                  <Text style={[styles.dinamicTextColor, {color: textColor}]}>
                    {renk}
                  </Text>
                </View>
              </View>
            </Shadow>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const phoneHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  box1: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  boxButton: {
    width: 100,
    height: 40,
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  boxButtonActive: {
    borderColor: 'black',
  },
  boxText: {
    color: 'gray',
  },
  boxTextActive: {
    color: 'black',
    fontWeight: 'bold',
  },
  colorBox: {
    width: '100%',
    height: 125,
    backgroundColor: 'red',
    marginBottom: 15,
    padding: 15,
    borderTopColor: 'lightgray',
    borderTopWidth: 2,
    justifyContent: 'space-between',
  },
  dinamicTextColor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  colorBoxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
