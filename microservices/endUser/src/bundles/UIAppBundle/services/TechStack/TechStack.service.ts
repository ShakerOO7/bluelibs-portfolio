import toast from 'react-hot-toast';

import { use } from '@bluelibs/x-ui';
import { Smart, useSmart } from '@bluelibs/smart';

import { TeckStack, TeckStackCollection } from '../../collections';
import { ITechStackState, TechStackContext } from './TechStack.context';

export class TechStackService extends Smart<ITechStackState> {
  private techStackCollection: TeckStackCollection = use(TeckStackCollection);

  // Set the initial state
  state = { data: [], isLoading: false } as ITechStackState;

  async init() {
    await this.load();
  }

  /**
   * Load data into the state
   */
  async load() {
    this.updateState({ isLoading: true });
    try {
      const techStack = await this.fetch();
      this.updateState({ data: techStack as TeckStack[] });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      this.updateState({ isLoading: false });
    }
  }

  /**
   * Fetch data from repository
   */
  async fetch() {
    return await this.techStackCollection.find({});
  }

  static getContext() {
    return TechStackContext;
  }
}

export function useTechStackService() {
  return useSmart(TechStackService);
}
