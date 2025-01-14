import {Pressable, Text} from '@react-native-material/core';
import React from 'react';
import {StyleSheet} from 'react-native';
import {IUser} from '../../../interfaces';

interface UsersListItemProps {
  user: IUser;
  selectUser: (selectedUser: IUser) => void;
}

export const UsersListItem = ({user, selectUser}: UsersListItemProps) => {
  return (
    <Pressable style={styles.container} onPress={() => selectUser(user)}>
      <Text style={styles.title}>{user?.email}</Text>
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
