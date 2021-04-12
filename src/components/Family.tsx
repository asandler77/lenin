import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FamilyCarousel from './FamilyCarousel';

const persons = [
  {
    key: '1',
    name: 'Vladimir',
    sureName: 'Lenin',
    imageUrl: '../assets/images/Lenin.jpeg',
    relatives: {
      father: 'Ilia Ulianov',
      mother: 'Luba Ulianov',
    },
  },
  {
    key: '2',
    name: 'Ilia',
    sureName: 'Ulianov',
    imageUrl: '../assets/images/IlliaUlianov.jpeg',
    relatives: {
      father: 'kolia ivanov',
      mother: 'anna ivanova',
    },
  },
];

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ulianov (Lenin)Family carousel</Text>
      <FamilyCarousel persons={persons} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
