import type { NextPage } from 'next';
import {
  ProfileCard,
  Layout,
  TechStack,
  Projects,
} from '../bundles/UIAppBundle/components';

const Home: NextPage = () => {
  return (
    <Layout>
      <ProfileCard />
      <TechStack />
      <Projects />
    </Layout>
  );
};

export default Home;
