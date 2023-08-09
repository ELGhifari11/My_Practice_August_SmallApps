import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import ContactList from './components/app1/ContactList';
import LinkCardItems from './components/app1/LinkCardItems';
import PasswodGenerator from './components/app2/PasswodGenerator';
import RandomColor from './components/app3/RandomColor';
import RollingImage from './components/app4/RollingImage';
import FlatlistCurrencies from './components/app5/FlatlistCurrencies';

const App = () => {
  const [randomColor, setRandomColor] = useState('white');

  const generateColor = () => {
    const hexRange = '0123456789ACBDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomColor(color);
    console.log(`Hex Color : ${randomColor}`);
  };
  const resetColor = () => {
    setRandomColor('white');
  };

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: randomColor}]}>
      <RandomColor onPress={generateColor} onLongPress={resetColor} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatlistCurrencies />
        <PasswodGenerator />
        <RollingImage />
        <Text style={styles.headingText}>{`Link card    >>> `}</Text>
        <LinkCardItems />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {},
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
    color: 'black',
  },
});
