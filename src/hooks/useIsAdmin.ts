import {isAdminCurrentUserSelector} from '../store/selectors/currentUserSelectors';
import {TRootState} from '../store/index';
import {useSelector} from 'react-redux';

export const useIsAdmin = () => {
  const isAdmin = useSelector<TRootState, boolean>((state: TRootState) =>
    isAdminCurrentUserSelector(state),
  );

  return {isAdmin};
};
