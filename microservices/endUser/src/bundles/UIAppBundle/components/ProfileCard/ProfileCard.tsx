import { FunctionComponent } from 'react';

import styles from './ProfileCard.module.scss';

interface ProfileCardProps {}

const ProfileCard: FunctionComponent<ProfileCardProps> = () => {
  return (
    <div className={styles.container}>
      Hi 👋, <br />
      My Name is <br />
      Shaker Allahham <br /> I build things for Web
    </div>
  );
};

export default ProfileCard;
