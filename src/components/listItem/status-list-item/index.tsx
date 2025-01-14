import {Pressable, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {IStatus} from '../../../interfaces';

interface StatusListItemProps {
  status: IStatus;
  selectStatus: (selectedStatus: IStatus) => void;
}

export const StatusListItem = ({status, selectStatus}: StatusListItemProps) => {
  return (
    <Pressable style={styles.container} onPress={() => selectStatus(status)}>
      <Text style={styles.title}>{status?.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    marginTop: 5,
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
  },
});
