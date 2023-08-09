import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type ButtonProps = PropsWithChildren<{
  name: String;
  flag: String;
}>;

export default function Button(pros: ButtonProps): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{pros.flag}</Text>
      <Text style={styles.country}>{pros.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 40,
    marginBottom: 10,
  },
  country: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
});
