import {IProject} from '../index';

export interface IProjectsReducerState {
  projects: IProject[];
  error: any;
  loading: boolean;
}
