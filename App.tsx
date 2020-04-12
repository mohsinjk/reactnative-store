//This is an example code to show Image Icon in TextInput// 
import React, { Component } from 'react';
//import react in our code.

import { StyleSheet, View, TextInput, Image } from 'react-native';
//import all the components we are going to use. 

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SectionStyle}>
          <Image
            source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',}}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
        </View>
         <View style={styles.SectionStyle}>
          <Image
            source={{uri:'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',}}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Your Mobile No Here"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 10,
   elevation: 5
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});