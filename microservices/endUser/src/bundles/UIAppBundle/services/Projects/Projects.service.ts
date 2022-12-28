import toast from 'react-hot-toast';

import { use } from '@bluelibs/x-ui';
import { Smart, useSmart } from '@bluelibs/smart';

import { IProjectState, ProjectContext } from './Projects.context';
import { Project, ProjectsCollection } from '../../collections';

export class ProjectService extends Smart<IProjectState> {
  private projectsCollection: ProjectsCollection = use(ProjectsCollection);

  // Set the initial state
  state = { data: [], isLoading: false } as IProjectState;

  async init() {
    await this.load();
  }

  /**
   * Load data into the state
   */
  async load() {
    this.updateState({ isLoading: true });
    try {
      const data = await this.fetch();
      this.updateState({ data: data as Project[] });
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
    return await this.projectsCollection.find(
      {},
      {
        _id: 1,
        name: 1,
        description: 1,
        techStack: 1,
        codeUrl: 1,
        link: 1,
        image: { downloadUrl: 1 },
      }
    );
  }

  static getContext() {
    return ProjectContext;
  }
}

export function useProjectsService() {
  return useSmart(ProjectService);
}
