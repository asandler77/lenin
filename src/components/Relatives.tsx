import React from 'react';
import { Text, View, StyleSheet, ViewStyle, useState, TouchableOpacity } from 'react-native';
import  { Transition, Transitioning } from 'react-native-reanimated';
import {PersonInfo} from "../common/types";

interface Props {
  relatives?: PersonInfo[];
  customStyle?: ViewStyle;
}

const transition = (
  <Transition.Together>
    <Transition.In type='scale' durationMs={1000} />
    <Transition.Change />
    <Transition.Out type='scale' durationMs={1000} />
  </Transition.Together>
);
export default ({ relatives, customStyle }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef();

  const toggleExpand = () => {
    ref.current.animateNextTransition();
    setIsOpen(!isOpen);
  };

  const showOrHide = isOpen ? 'Hide' : 'Show';
  const titleColor = isOpen ? 'red' : 'green';

  return (
    <Transitioning.View
      transition={transition}
      ref={ref}
      style={[styles.container, customStyle]}>
      <TouchableOpacity
        onPress={() => {
          toggleExpand();
        }}>
        <Text style={[styles.names, {color: titleColor}]}>{showOrHide} Relatives</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={[styles.relatives]}>
          <Text style={styles.names}>Father: {relatives.father}</Text>
          <Text style={styles.names}>Mother:{relatives.mother}</Text>
        </View>
      )}
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 20,
    padding: 10,
  },
  relatives: {
    marginTop: 10,
  },
  names: {
    fontSize: 20,
  },
});
