/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IUser} from '../../interfaces';
import {Button, Text} from '@react-native-material/core';
import {UserPickerModal} from '../task-user-picker-modal';

interface UserPickerProps {
  usersInProject: IUser[];
  user: IUser | undefined;
  setUser: (user: IUser) => void;
}

export const UserPicker = ({
  usersInProject,
  user,
  setUser,
}: UserPickerProps) => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const selectUser = React.useCallback((selectedUser: IUser) => {
    setUser(selectedUser);
    closeModal();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User:</Text>

      <View style={styles.wrapperType_title}>
        <Text>{user?.email ?? 'Not selected'}</Text>
      </View>

      <UserPickerModal
        usersInProject={usersInProject}
        open={open}
        closeModal={closeModal}
        selectUser={selectUser}
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
