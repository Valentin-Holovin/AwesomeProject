/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IType} from '../../interfaces';
import {Button, Text} from '@react-native-material/core';
import {TypePickerModal} from '../task-type-picker-modal';

interface TypePickerProps {
  type: IType | undefined;
  setType: (type: IType) => void;
}

export const TypePicker = ({type, setType}: TypePickerProps) => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const selectType = React.useCallback((selectedType: IType) => {
    setType(selectedType);
    closeModal();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type:</Text>

      <View style={styles.wrapperType_title}>
        <Text>{type?.title ?? 'Not selected'}</Text>
      </View>

      <TypePickerModal
        open={open}
        closeModal={closeModal}
        selectType={selectType}
      />

      <Button title="Select" style={styles.button} onPress={openModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  wrapperType_title: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    marginHorizontal: 5,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    marginHorizontal: 5,
  },
});
