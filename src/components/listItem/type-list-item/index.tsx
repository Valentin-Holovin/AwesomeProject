import {Pressable, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {IType} from '../../../interfaces';

interface TypeListItemProps {
  types: IType;
  selectType: (selectedType: IType) => void;
}

export const TypeListItem = ({types, selectType}: TypeListItemProps) => {
  return (
    <Pressable style={styles.container} onPress={() => selectType(types)}>
      <Text style={styles.title}>{types?.title}</Text>
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
