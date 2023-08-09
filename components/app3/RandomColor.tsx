import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function RandomColor({onPress, onLongPress}: any) {
  // const [randomColor, setRandomColor] = useState('');

  // const generateColor = () => {
  //   const hexRange = '0123456789ACBDEF';
  //   let color = '#';

  //   for (let i = 0; i < 6; i++) {
  //     color += hexRange[Math.floor(Math.random() * 16)];
  //   }
  //   setRandomColor(color);
  //   console.log(`Hex Color : ${randomColor}`);
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        activeOpacity={0.7}
        style={styles.touchableButton}>
        <Text style={styles.textButton}>Press</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 60,
    right: 40,
    zIndex: 99,
  },
  touchableButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'black',
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
  },
});
