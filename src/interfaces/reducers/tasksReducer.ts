import {ITask} from '../index';

export interface ITasksReducerState {
  tasks: ITask[];
  error: any;
  loading: boolean;
}
