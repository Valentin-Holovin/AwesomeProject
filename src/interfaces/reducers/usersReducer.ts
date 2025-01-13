import {IUser} from '../index';

export interface IUsersReducerState {
  users: IUser[];
  error: any;
  loading: boolean;
}
