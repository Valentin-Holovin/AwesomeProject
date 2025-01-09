import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '@react-native-material/core';

export const Projects = () => {
  return (
    <View style={styles.container}>
      <Text>Projects</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
  },
});
