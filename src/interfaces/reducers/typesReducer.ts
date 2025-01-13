import {IType} from '../index';

export interface ITypesReducerState {
  types: IType[];
  error: any;
  loading: boolean;
}
