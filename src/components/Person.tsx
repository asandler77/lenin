import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../common/Constants';
import { IMAGES } from '../common/images';
import { PersonInfo } from '../common/types';
import Relatives from './Relatives';
import PersonalData from './PersonalData';

interface Props {
  person?: PersonInfo;
  relatives?: any;
}
const cardWidth = SCREEN_WIDTH * 0.7;
const cardHeight = SCREEN_HEIGHT * 0.8;

export default ({ person, relatives }: Props) => {
  const customStyle = { marginHorizontal: 15, borderRadius: 10 };
  return (
    <View style={styles.container}>
      <PersonalData person={person} customStyle={customStyle} />
      <Relatives relatives={person.relatives} customStyle={customStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: 'green',
    paddingTop: 15,
    width: cardWidth,
    height: cardHeight,
    marginTop: 20,
    borderRadius: 35,
    marginHorizontal: 10,
    flex: 1,
  },
});
