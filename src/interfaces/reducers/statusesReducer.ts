import {IStatus} from '../index';

export interface IStatusesReducerState {
  statuses: IStatus[];
  error: any;
  loading: boolean;
}
