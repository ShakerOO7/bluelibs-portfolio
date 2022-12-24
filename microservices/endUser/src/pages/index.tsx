import type { NextPage } from 'next';
import ProfileCard from '../bundles/UIAppBundle/components/ProfileCard/ProfileCard';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ProfileCard></ProfileCard>
    </div>
  );
};

export default Home;
