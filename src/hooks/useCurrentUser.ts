import {useDispatch, useSelector} from 'react-redux';
import {TAppDispatch, TRootState} from '../store';
import {IUser} from '../interfaces';
import React from 'react';
import {fetchCurrentUserAsyncAction} from '../store/actions/currentUserActions';

export const useCurrentUser = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const currentUser = useSelector<TRootState, IUser | undefined>(
    (state: TRootState) => state.currentUser.currentUser,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.currentUser.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.currentUser.loading,
  );

  const fetchCurrentUser = React.useCallback(() => {
    dispatch(fetchCurrentUserAsyncAction());
  }, []);

  return {
    currentUser,
    error,
    loading,
    fetchCurrentUser,
  };
};
