import type { NextPage } from 'next';
import {
  ProfileCard,
  Layout,
  TechStack,
} from '../bundles/UIAppBundle/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <ProfileCard />
      <TechStack />
    </Layout>
  );
};

export default Home;
