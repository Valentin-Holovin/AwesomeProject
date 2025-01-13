/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Header, LoadingIndicator, ProfileAvatar} from '../../components';
import {Button, Text, TextInput} from '@react-native-material/core';
import {useCurrentUser, useValidation} from '../../hooks';
import {UniversalErrorIcon} from '../../assets';

export const Profile = () => {
  const {
    currentUser,
    error,
    loading,
    fetchCurrentUser,
    updateCurrentUser,
    logout,
  } = useCurrentUser();

  const {validateField} = useValidation();

  const [email, setEmail] = React.useState(currentUser?.email);
  const [name, setName] = React.useState(currentUser?.name);
  const [avatar, setAvatar] = React.useState<File | string | undefined>(
    currentUser?.avatar,
  );

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  const deleteAvatar = React.useCallback(() => {
    setAvatar(undefined);
  }, []);

  const updateCurrentUserProfile = React.useCallback(() => {
    const isNameValid = validateField('name', name || '');
    if (isNameValid) {
      updateCurrentUser(name || '', avatar);
    }
  }, [name, avatar]);

  const logoutUser = React.useCallback(() => {
    Alert.alert(
      'Confirm logout',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          style: 'destructive',
          onPress: () => {
            logout();
          },
        },
      ],
      {cancelable: true},
    );
  }, []);

  if (error) {
    return <UniversalErrorIcon text="Something went wrong" />;
  }

  return (
    <View style={styles.container}>
      <LoadingIndicator visible={loading} />

      <Header title="Profile" isBack />

      <View style={styles.wrapper}>
        <Text style={styles.title}>Your Profile</Text>

        <ProfileAvatar
          avatar={currentUser?.avatar}
          deleteAvatar={deleteAvatar}
        />

        <View style={styles.form_wrapper}>
          <TextInput
            label="Email"
            variant="outlined"
            value={email}
            onChangeText={setEmail}
            onBlur={() => validateField('email', email || '')}
          />
          <TextInput
            style={styles.input}
            label="Name"
            variant="outlined"
            value={name}
            onChangeText={setName}
            onBlur={() => validateField('name', name || '')}
          />
        </View>

        <View style={styles.button_wrapper}>
          <Button
            style={styles.button}
            title="UPDATE PROFILE"
            onPress={updateCurrentUserProfile}
            loading={loading}
            disabled={loading}
          />
        </View>

        <View style={styles.button_wrapper}>
          <Button
            style={styles.button}
            title="LOGOUT"
            onPress={logoutUser}
            loading={loading}
            disabled={loading}
            variant="outlined"
            color="red"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },

  form_wrapper: {
    marginTop: 15,
  },
  input: {
    marginTop: 10,
  },
  button_wrapper: {
    marginTop: 10,
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
  },
});
