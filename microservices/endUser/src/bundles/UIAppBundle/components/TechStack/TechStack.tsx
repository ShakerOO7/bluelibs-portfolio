import { FunctionComponent } from 'react';
import Image from 'next/image';
import { newSmart } from '@bluelibs/smart';

import { TechStackService, useTechStackService } from '../../services';

import styles from './TechStack.module.scss';

const TechStackWrapper: FunctionComponent = () => {
  const [, TechStackProvider] = newSmart(TechStackService);
  return (
    <TechStackProvider>
      <TechStack />
    </TechStackProvider>
  );
};

function TechStack() {
  const TechStackService = useTechStackService();
  const techStackState = TechStackService.state;

  return (
    <div className={styles.container}>
      <div className={'title'}>My Tech Stack</div>
      <div className={'description'}>
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

export default TechStackWrapper;
