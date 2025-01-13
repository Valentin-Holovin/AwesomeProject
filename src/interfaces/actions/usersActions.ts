import {IUser} from '..';

export interface ISetUsersAction {
  users: IUser[];
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}
