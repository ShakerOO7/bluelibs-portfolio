import { newSmart } from '@bluelibs/smart';
import { FunctionComponent } from 'react';
import { Project } from '../../collections';
import {
  IProjectState,
  ProjectService,
  useProjectsService,
} from '../../services';

import { ProjectCard } from '../ProjectCard';

import styles from './Projects.module.scss';

interface ProjectsProps {}

const ProjectsWrapper: FunctionComponent = () => {
  const [, ProjectsProvider] = newSmart(ProjectService);
  return (
    <ProjectsProvider>
      <Projects />
    </ProjectsProvider>
  );
};

const Projects: FunctionComponent<ProjectsProps> = () => {
  const projectsService = useProjectsService();
  const state: IProjectState = projectsService.state;

  console.log(state.data);

  return (
    <div className={styles.container}>
      <div className={'title'}>Projects</div>
      <div className={'description'}>Things I’ve built so far</div>
      <div className={styles['projects-list']}>
        {state.data.map(({ _id, ...project }) => (
          <ProjectCard key={_id} {...project} image={project.image} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsWrapper;
