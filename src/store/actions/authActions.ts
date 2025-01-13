/* eslint-disable @typescript-eslint/no-unused-vars */
import {signInApi, signUpApi} from '../../api/authApi';
import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {
  ISetAccessTokenAction,
  ISetLoadingAction,
  ISignInAsyncAction,
  ISignUpAsyncAction,
} from '../../interfaces/actions/authActions';
import {showToast} from '../../services';

export const setAccessTokenAction = createAction<ISetAccessTokenAction>(
  'auth/setAccessTokenAction',
);

export const setLoadingAction = createAction<ISetLoadingAction>(
  'auth/setLoadingAction',
);

export const signInAsyncAction = createAsyncThunk<void, ISignInAsyncAction>(
  'auth/signInAsyncAction',
  async (
    {email, password, onSuccess}: ISignInAsyncAction,
    {getState, dispatch},
  ) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await signInApi(email, password);
      if (res.token) {
        dispatch(setAccessTokenAction({accessToken: res.token}));
      }
      console.log({token: res.token});
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      const errorDetails = e.response.data;
      console.log('authActions::signInAsyncAction error:', errorDetails);
      let errorText = '';
      if (errorDetails.message) {
        errorText = errorText + `${errorDetails.message}. `;
      }
      if (errorDetails.errors) {
        for (let i = 0; i < errorDetails.errors.length; i++) {
          errorText =
            errorText +
            `\n${errorDetails.errors[i].param}: ${errorDetails.errors[i].msg}. `;
        }
      }
      showToast({
        type: 'error',
        text1: errorText,
      });
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);

export const signUpAsyncAction = createAsyncThunk<void, ISignUpAsyncAction>(
  'auth/signUpAsyncAction',
  async (
    {
      email,
      name,
      password,
      repeatPassword,
      role,
      avatar,
      onSuccess,
    }: ISignUpAsyncAction,
    {getState, dispatch},
  ) => {
    console.log(email, password, name, role);
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await signUpApi(email, name, password, role, avatar);
      if (res.token) {
        dispatch(setAccessTokenAction({accessToken: res.token}));
      }
      console.log({res});
      console.log({token: res.token});
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      const errorDetails = e.response.data;
      console.log('authActions::signUpAsyncAction error:', errorDetails);
      let errorText = '';
      if (errorDetails.message) {
        errorText = errorText + `${errorDetails.message}. `;
      }
      if (errorDetails.errors) {
        for (let i = 0; i < errorDetails.errors.length; i++) {
          errorText =
            errorText +
            `\n${errorDetails.errors[i].param}: ${errorDetails.errors[i].msg}. `;
        }
      }
      showToast({
        type: 'error',
        text1: errorText,
      });
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);
