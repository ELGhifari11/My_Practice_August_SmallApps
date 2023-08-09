import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function FancyCard({
  linkImage,
  backgroundColor,
  shadowColor,
  onPress,
  titleText,
}: any) {
  return (
    <View>
      <View
        style={[
          styles.card,
          styles.cardElevated,
          {backgroundColor: backgroundColor, shadowColor: shadowColor},
        ]}>
        <Image style={styles.cardImage} source={{uri: linkImage}} />
        <View style={styles.containerImageText}>
          <Text style={styles.titleTextImage}>{titleText}</Text>
          <Text style={styles.imageText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            recusandae, voluptatibus dolorem atque excepturi ipsam reprehenderit
            expedita sequi minus reiciendis, praesentium alias ad cumque
            aspernatur et assumenda vel? Veritatis, nam!
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.textLink}> See more </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    width: 280,
    height: 250,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 14,
    borderRadius: 10,
    shadowOffset: {
      height: 2,
      width: 2,
    },

    shadowOpacity: 0.5,
  },
  cardElevated: {},
  cardImage: {
    height: 130,
    width: 280,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containerImageText: {},
  titleTextImage: {
    paddingHorizontal: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 9,
  },
  imageText: {
    color: 'white',
    paddingHorizontal: 5,
    fontWeight: '600',
    fontSize: 9,
  },
  textLink: {
    paddingHorizontal: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    paddingVertical: 9,
  },
});
