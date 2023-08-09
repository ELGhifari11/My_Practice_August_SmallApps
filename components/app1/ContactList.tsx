import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Contacts} from './ContactItems';

export default function ContactList() {
  return (
    <View>
      <Text style={styles.headingText}>{`Contact List    >>>`}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.containerScroll}>
        {Contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <Text style={styles.userNama}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'black',
  },
  containerScroll: {},
  userCard: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 20,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    marginBottom: 5,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 100,
    margin: 10,
  },
  userNama: {
    marginHorizontal: 10,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  userStatus: {
    marginHorizontal: 10,
    fontWeight: '500',
    fontSize: 7,
    color: 'white',
  },
});
