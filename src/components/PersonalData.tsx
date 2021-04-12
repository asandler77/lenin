import React from 'react';
import { Text, View, StyleSheet, Image, ViewStyle } from 'react-native';
import { PersonInfo } from '../common/types';

interface Interface {
  person?: PersonInfo;
  customStyle?: ViewStyle;
}

export default ({ person, customStyle }: Interface) => {
  const IMAGE = person.imageUrl;
  return (
    <View style={[styles.container, customStyle]}>
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.name}>{person.sureName}</Text>
      <Image style={styles.image} source={{ uri: 'https://commons.wikimedia.org/wiki/File:I_N_Ulyanov_(cropped)_(cropped).jpg' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
  },
  image: {
    borderWidth: 1,
    width: 80,
    height: 100,
  },
});
