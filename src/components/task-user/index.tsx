import {Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IUser} from '../../interfaces';

interface TaskUserProps {
  user: IUser;
}

export const TaskUser = ({user}: TaskUserProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.email}</Text>
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
