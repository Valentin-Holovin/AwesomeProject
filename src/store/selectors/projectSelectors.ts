import {IProject} from '../../interfaces';
import {TRootState} from '../index';
import {createSelector} from 'reselect';

const projectsSelector = (state: TRootState) => state.projects.projects;

export const projectInfoSelector = (projectId: number) =>
  createSelector([projectsSelector], (projects: IProject[]) =>
    projects.find((project: IProject) => project.id == projectId),
  );
