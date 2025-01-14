/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IStatus} from '../../interfaces';
import {Button, Text} from '@react-native-material/core';
import {StatusPickerModal} from '../task-status-picker-modal';

interface StatusPickerProps {
  status: IStatus | undefined;
  setStatus: (status: IStatus) => void;
}

export const StatusPicker = ({status, setStatus}: StatusPickerProps) => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const selectStatus = React.useCallback((selectedStatus: IStatus) => {
    setStatus(selectedStatus);
    closeModal();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Status:</Text>

      <View style={styles.wrapperType_title}>
        <Text>{status?.title ?? 'Not selected'}</Text>
      </View>

      <StatusPickerModal
        open={open}
        closeModal={closeModal}
        selectStatus={selectStatus}
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
