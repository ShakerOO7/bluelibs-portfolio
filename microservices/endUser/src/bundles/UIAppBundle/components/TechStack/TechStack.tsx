import styles from './TechStack.module.scss';
import { useTechStackService } from '../../services';
import Image from 'next/image';

interface TechStackProps {}

export default function TechStack() {
  const TechStackService = useTechStackService();
  let techStackState = TechStackService.state;

  return (
    <div className={styles.container}>
      <div className={styles.title}>My Tech Stack</div>
      <div className={styles.description}>
        Technologies I’ve been working with recently
      </div>
      <div className={styles['image-list']}>
        {techStackState.data.map(({ _id, image }) => (
          <Image key={_id} width={128} height={128} src={image.downloadUrl} />
        ))}
      </div>
    </div>
  );
}
