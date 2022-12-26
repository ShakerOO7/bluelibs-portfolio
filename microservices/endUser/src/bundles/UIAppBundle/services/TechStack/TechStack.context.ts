import React from 'react';
import { TeckStack } from '../../collections';

export const TechStackContext = React.createContext(null);

export interface ITechStackState {
  data: TeckStack[];
  isLoading: boolean;
}
