/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, Text} from '@react-native-material/core';
import {useNavigator, useValidation} from '../../hooks';
import {useDispatch, useSelector} from 'react-redux';
import {TAppDispatch, TRootState} from '../../store';
import {signInAsyncAction} from '../../store/actions/authActions';

export const SignIn = () => {
  const [email, setEmail] = React.useState('admin@gmail.com');
  const [password, setPassword] = React.useState('Password12345');

  const {navigation} = useNavigator();
  const {validateField} = useValidation();

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.loading,
  );

  const dispatch = useDispatch<TAppDispatch>();

  const handleSubmit = React.useCallback(() => {
    const isEmailValid = validateField('email', email);
    const isPasswordValid = validateField('password', password);

    if (isEmailValid && isPasswordValid) {
      dispatch(
        signInAsyncAction({
          email: email,
          password: password,
          onSuccess: goToProjects,
        }),
      );
    }
  }, [email, password]);

  const goToProjects = () => {
    navigation.navigate('Projects');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.form_wrapper}>
        <TextInput
          label="Email"
          variant="outlined"
          value={email}
          onChangeText={setEmail}
          onBlur={() => validateField('email', email)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          variant="outlined"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onBlur={() => validateField('password', password)}
        />
      </View>

      <View style={styles.button_wrapper}>
        <Button
          style={styles.button}
          title="SIGN IN"
          onPress={handleSubmit}
          loading={loading}
          disabled={loading}
        />
      </View>
      <View style={styles.button_wrapper}>
        <Button
          style={styles.button}
          title="GO TO SIGN UP"
          onPress={goToSignUp}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
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
