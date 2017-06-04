/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


import  english_german from './english_german.json';

export default class Dictionary extends Component {

  constructor(props) {
     super(props);
     this.state = {input: null, output:''};


}

showMeaning()
{
  const input = this.state.input ;
  console.log("input is"+ input);
  let meaning = input in english_german ?
       english_german[input] :
        "Not Found";

  //******update the state***
  console.log("putput"+ meaning);
  this.setState({output:meaning})
  
}



  render() {
    return (
      <View style={styles.container}>
     <Text> Type Something in English </Text>

  <TextInput    placeholder="Type here to translate!"
          onChangeText={(input) => this.setState({input})}
          onSubmitEditing={() =>this.showMeaning()} />

  <Text style={styles.germanLabel}>
 Its German equivalent :
  </Text>

  <Text style = { styles.germanWord }>
{ this.state.output}
  </Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 16
  },

germanLabel :{
  marginTop :20,
  fontWeight :'bold',
  fontSize :20
},

germanWord :{
  marginTop :20,
  fontWeight :'bold',
  fontSize :20
}
});

AppRegistry.registerComponent('Dictionary', () => Dictionary);
