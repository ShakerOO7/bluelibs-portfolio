import type { NextPage } from 'next';
import { ProfileCard } from '../bundles/UIAppBundle/components';
import { Layout } from '../bundles/UIAppBundle/components/Layout';

import styles from '../styles/Pages/Home.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </Layout>
  );
};

export default Home;
