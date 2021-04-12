import React from 'react';
import { Text, View, StyleSheet, ViewStyle, useState, TouchableOpacity } from 'react-native';
import { PersonInfo } from '../common/types';
import  { Transition, Transitioning } from 'react-native-reanimated';

interface Props {
  relatives?: any;
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
  // const animatedController = React.useRef(new Animated.Value(0)).current;
  // const [relativesSectionHeight, setRelativesSectionHeight] = useState(0);

  // const bodyHeight = animatedController.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 100],
  // });
  //
  // const prepareAnimation = (toValue: number) => {
  //   return Animated.timing(animatedController, {
  //     duration: 3000,
  //     toValue: toValue,
  //     easing: Easing.linear,
  //   });
  // };

  const toggleExpand = () => {
    // let animation;
    // if (isOpen) {
    //   animation = prepareAnimation(0);
    // } else {
    //   animation = prepareAnimation(1);
    // }
    // animation && animation.start();
    ref.current.animateNextTransition();
    setIsOpen(!isOpen);
  };

  return (
    <Transitioning.View
      transition={transition}
      ref={ref}
      style={[styles.container, customStyle]}>
      <TouchableOpacity
        onPress={() => {
          toggleExpand();
        }}>
        <Text style={styles.names}>Expand Relatives</Text>
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
