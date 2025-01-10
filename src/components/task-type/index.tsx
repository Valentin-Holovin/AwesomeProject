import {Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IType} from '../../interfaces';

interface TaskTypeProps {
  type: IType;
}

export const TaskType = ({type}: TaskTypeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 8,
    marginRight: 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
});
