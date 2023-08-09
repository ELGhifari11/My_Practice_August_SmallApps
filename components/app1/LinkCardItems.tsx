import {Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FancyCard from './FancyCard';

const openWibsite = (websiteLink: string) => {
  Linking.openURL(websiteLink);
};

export default function LinkCardItems() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View></View>
        <FancyCard
          headingText=""
          linkImage={
            'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          titleText="Beatiful Florest"
          onPress={() =>
            openWibsite(
              'https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/',
            )
          }
          backgroundColor="green"
          shadowColor="green"
        />
        <FancyCard
          headingText=""
          linkImage={
            'https://images.pexels.com/photos/339153/pexels-photo-339153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          titleText="Beatiful Sahara"
          onPress={() =>
            openWibsite('https://www.pexels.com/photo/desert-field-339153/')
          }
          backgroundColor="brown"
          shadowColor="brown"
        />
        <FancyCard
          headingText=""
          linkImage={
            'https://images.pexels.com/photos/921724/pexels-photo-921724.jpeg?auto=compress&cs=tinysrgb&w=1600'
          }
          titleText="Beatiful Beach"
          onPress={() =>
            openWibsite(
              'https://www.pexels.com/photo/photo-of-body-of-water-921724/',
            )
          }
          backgroundColor="#007aff"
          shadowColor="#007aff"
        />

        <FancyCard
          headingText="  "
          linkImage={
            'https://images.pexels.com/photos/414667/pexels-photo-414667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          }
          backgroundColor="purple"
          shadowColor="purple"
          onPress={() =>
            openWibsite(
              'https://www.pexels.com/photo/background-beautiful-bloom-blooming-414667/',
            )
          }
          titleText="Beatiful Flower"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
