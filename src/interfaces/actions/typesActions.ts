import {IType} from '..';

export interface ISetTypesAction {
  types: IType[];
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}
