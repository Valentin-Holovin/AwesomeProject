/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {TAppDispatch} from '../../store';
import {TUserRole} from '../../interfaces';
import {Button, TextInput} from '@react-native-material/core';
import CheckBoxCompleteIcon from '../../assets/icons/checkBox-complete-icon';
import CheckBoxIcon from '../../assets/icons/checkBox-icon';
import {useNavigator, useValidation} from '../../hooks';
import {signUpAsyncAction} from '../../store/actions/authActions';
import {EMPTY_PHOTO_URL} from '../../constants';
import useGallery from '../../hooks/useGallary';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const dispatch = useDispatch<TAppDispatch>();
  const {navigation} = useNavigator();
  const {validateField} = useValidation();
  const {photo, selectPhoto} = useGallery();

  const avatarUrl = React.useMemo(() => photo || EMPTY_PHOTO_URL, [photo]);

  const goToProjects = React.useCallback(() => {
    navigation.navigate('Projects');
  }, []);

  const handleSubmit = () => {
    setIsAdmin(prev => !prev);
  };

  const handleSignUp = React.useCallback(() => {
    const role: TUserRole = isAdmin ? 'ADMIN' : 'USER';

    dispatch(
      signUpAsyncAction({
        email: email,
        name: name,
        password: password,
        repeatPassword: repeatPassword,
        role: role,
        avatar: avatarUrl,
        onSuccess: goToProjects,
      }),
    );
  }, [
    dispatch,
    email,
    name,
    password,
    repeatPassword,
    isAdmin,
    avatarUrl,
    goToProjects,
  ]);

  const handleGoToSignInScreen = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUp</Text>
      <TouchableOpacity onPress={selectPhoto}>
        <Image source={{uri: avatarUrl}} style={styles.avatar} />
        <Text>Change Avatar</Text>
      </TouchableOpacity>
      <View style={styles.form_wrapper}>
        <TextInput
          style={styles.input}
          label="Email"
          variant="outlined"
          value={email}
          onChangeText={setEmail}
          onBlur={() => validateField('email', email)}
        />
        <TextInput
          style={styles.input}
          label="Name"
          variant="outlined"
          value={name}
          onChangeText={setName}
          onBlur={() => validateField('name', name)}
        />
        <TextInput
          style={styles.input}
          label="password"
          variant="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          onBlur={() => validateField('password', password)}
        />
        <TextInput
          style={styles.input}
          label="password"
          variant="outlined"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
          onBlur={() => validateField('password', password)}
        />
      </View>
      <View style={styles.checkBox_wrapper}>
        <Text>Sign up as Admin</Text>
        <TouchableOpacity onPress={handleSubmit}>
          {!isAdmin ? <CheckBoxCompleteIcon /> : <CheckBoxIcon />}
        </TouchableOpacity>
      </View>
      <View style={styles.button_wrapper}>
        <Button style={styles.button} title="sign up" onPress={handleSignUp} />
      </View>
      <View style={styles.button_wrapper}>
        <Button title="go to sign in" onPress={handleGoToSignInScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  form_wrapper: {
    marginTop: 15,
    width: '100%',
  },
  input: {
    marginTop: 10,
  },
  checkBox_wrapper: {
    marginTop: 10,
    flexDirection: 'row',
  },
  button_wrapper: {
    marginTop: 10,
    width: '100%',
  },
  button: {
    elevation: 0,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
  },
});
