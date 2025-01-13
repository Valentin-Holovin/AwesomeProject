import {Pressable} from '@react-native-material/core';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DeleteIcon} from '../../assets';

interface ProfileAvatarProps {
  avatar: File | string | undefined;
  deleteAvatar: () => void;
}

export const ProfileAvatar = ({avatar, deleteAvatar}: ProfileAvatarProps) => {
  return (
    <Pressable style={styles.avatar_wrapper} onPress={deleteAvatar}>
      <View style={styles.delete_avatar_icon}>
        <DeleteIcon color="#ff0000" />
      </View>
      <Image source={{uri: `${avatar}`}} style={styles.avatar} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  avatar_wrapper: {
    alignItems: 'center',
    marginTop: 15,
    position: 'relative',
  },
  delete_avatar_icon: {
    position: 'absolute',
    zIndex: 9999,
    bottom: 0,
    right: 110,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
  },
});
