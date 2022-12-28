import React from 'react';
import { Project } from '../../collections';

export const ProjectContext = React.createContext(null);

export interface IProjectState {
  data: Project[];
  isLoading: boolean;
}
