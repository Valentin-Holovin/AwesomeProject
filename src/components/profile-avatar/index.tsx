import {Button, Pressable} from '@react-native-material/core';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {DeleteIcon} from '../../assets';

interface ProfileAvatarProps {
  avatar: File | string | undefined;
  deleteAvatar?: () => void;
  isDeleteIcon?: boolean;
  selectPhoto?: () => void;
}

export const ProfileAvatar = ({
  avatar,
  deleteAvatar,
  isDeleteIcon = false,
  selectPhoto,
}: ProfileAvatarProps) => {
  return (
    <View>
      <Pressable style={styles.avatar_wrapper} onPress={deleteAvatar}>
        {isDeleteIcon && (
          <View style={styles.delete_avatar_icon}>
            <DeleteIcon color="#ff0000" />
          </View>
        )}
        <Image source={{uri: `${avatar}`}} style={styles.avatar} />
      </Pressable>

      <View style={styles.button_wrapper}>
        <Button
          style={styles.button}
          title="CHOOSE AVATAR"
          onPress={selectPhoto}
        />
      </View>
    </View>
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
  button_wrapper: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});
