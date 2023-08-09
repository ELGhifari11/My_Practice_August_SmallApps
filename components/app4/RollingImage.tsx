import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import type {JSXElementConstructor, PropsWithChildren} from 'react';

import Batu from '../images/batu.png';
import Gunting from '../images/gunting.png';
import Kertas from '../images/kertas.png';
import Ready from '../images/ready.png';

type SuitProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Suit = ({imageUrl}: SuitProps): JSX.Element => {
  return (
    <View style={styles.suitContainer}>
      <Image style={styles.suitImage} source={imageUrl} />
    </View>
  );
};

export default function RollingImage(): JSX.Element {
  const [suitImage, setSuitImage] = useState<ImageSourcePropType>(Ready);

  const rollSuitOn = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        setSuitImage(Gunting);
        console.log('Gunting');
        break;
      case 2:
        setSuitImage(Batu);
        console.log('Batu');
        break;
      case 3:
        setSuitImage(Kertas);
        console.log('Kertas');
        break;
      default:
        setSuitImage(Ready);
        console.log('Ready');
        break;
    }
  };

  const reset = () => {
    setSuitImage(Ready);
    console.log('Reset');
  };

  return (
    <View style={styles.container}>
      <Suit imageUrl={suitImage} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.buttonPress} onPress={rollSuitOn}>
          <Text style={styles.suitButtonText}>Play Suit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonPress} onPress={reset}>
          <Text style={styles.suitButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  suitImage: {
    width: 250,
    height: 250,
  },
  suitContainer: {},
  suitButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  buttonPress: {
    borderWidth: 2,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 15,
    marginHorizontal: 20,
  },
});
