import {IComment} from '../index';

export interface ICommentsReducerState {
  comments: IComment[];
  error: any;
  loading: boolean;
}
