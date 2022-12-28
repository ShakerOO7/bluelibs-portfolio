import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';

import { Project } from '../../collections';

import styles from './ProjectCard.module.scss';

interface ProjectCardProps extends Project {}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  name,
  description,
  techStack,
  codeUrl,
  link,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image
          className={styles.image}
          width={'600px'}
          height={'300px'}
          // objectFit={'contain'}
          src={image?.downloadUrl as string}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.description}>Tech Stack: {techStack}</div>
        <div className={styles.links}>
          {link && (
            <div>
              <a
                target='_blank'
                href={link as string}
                rel='noopener noreferrer'
              >
                <div className={styles.link}>Live Preview</div>
              </a>
            </div>
          )}
          {codeUrl && (
            <div className={styles.website}>
              <a
                target='_blank'
                href={codeUrl as string}
                rel='noopener noreferrer'
              >
                <div className={styles.link}>Code</div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
