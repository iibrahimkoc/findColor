/* eslint-disable prettier/prettier */
import React, {startTransition} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Shadow} from 'react-native-shadow-2';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.headerBox}>
        <Text style={styles.headerText}>FINDCOLOR.DEV</Text>
      </View>
      <View style={styles.bodyView}>
        <Shadow distance={0} startColor="black" offset={[10, 10]}>
          <View style={styles.textInputBox}>
            <Image
              style={styles.Image}
              source={require('../assets/color-bucket.png')}
            />
            <TextInput style={styles.textInput} placeholder="hex" />
          </View>
        </Shadow>
        <Shadow distance={0} startColor="black" offset={[10, 10]}>
          <View style={styles.textInputBox}>
            <Image
              style={styles.Image}
              source={require('../assets/color-bucket.png')}
            />
            <TextInput style={styles.textInput} placeholder="rgb" />
          </View>
        </Shadow>
      </View>
      <View style={styles.buttonBox}>
        <Shadow distance={0} startColor="black" offset={[5, 5]}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonBoxText}>Save</Text>
          </TouchableOpacity>
        </Shadow>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.buttonBoxText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerBox: {
    padding: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '900',
    color: 'black',
  },
  bodyView: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputBox: {
    minWidth: '80%',
    height: 70,
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },

  textInput: {
    minWidth: '70%',
    height: 64,
    fontSize: 20,
  },
  Image: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
  },
  buttonBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  saveButton: {
    width: 90,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 5,
    marginRight: 10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButton: {
    width: 90,
    height: 50,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBoxText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
