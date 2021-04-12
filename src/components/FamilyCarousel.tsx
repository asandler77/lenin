import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Person from './Person';
import { PersonInfo } from '../common/types';

interface Props {
  persons?: PersonInfo[];
}
export default ({ persons }: Props) => {
  return (
    <View>
      <FlatList keyExtractor={(item) => item.key} horizontal={true} data={persons} renderItem={({ item }) => <Person person={item} />} />
    </View>
  );
};
