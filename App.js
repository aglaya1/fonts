
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as firebase from 'firebase'

const colors = [
  "#C0392B",
  "#9B59B6",
  "#2980B9",
  "#1ABC9C",
  "#F1C40F",
  "#E67E22",
  "#F0F3F4",
  "#2C3E50"
]
export default class App extends React.Component {

  constructor(props) {
    super(props)}


  render() {
  let suggests = []


    for (let colorNum in colors) {
      suggests.push(
        <TouchableOpacity key={'s' + colorNum} style={[styles.mixel, {backgroundColor: colors[colorNum]}]}/>
      )
    }


    return (
      <View style={styles.container}>




         {suggests}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '20%'
  },

  mixel: {
    width: '12%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    aspectRatio: 1
  }
});
