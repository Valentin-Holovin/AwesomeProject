/* eslint-disable react-hooks/exhaustive-deps */
import {fetchTypesAsyncAction} from '../store/actions/typesActions';
import {IType} from '../interfaces';
import {TAppDispatch, TRootState} from '../store/index';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useTypes = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const types = useSelector<TRootState, IType[]>(
    (state: TRootState) => state.types.types,
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.types.error,
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.types.loading,
  );

  const fetchTypes = React.useCallback(() => {
    dispatch(fetchTypesAsyncAction());
  }, []);

  return {types, error, loading, fetchTypes};
};
