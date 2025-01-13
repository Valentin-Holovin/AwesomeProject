import {IUser} from '../index';

export interface ICurrentUserReducerState {
  currentUser: IUser | undefined;
  error: any;
  loading: boolean;
}
