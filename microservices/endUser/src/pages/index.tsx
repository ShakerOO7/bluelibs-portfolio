import { newSmart } from '@bluelibs/smart';
import type { NextPage } from 'next';
import {
  ProfileCard,
  Layout,
  TechStack,
} from '../bundles/UIAppBundle/components';
import { TechStackService } from '../bundles/UIAppBundle/services';

const Home: NextPage = () => {
  // TODO: Create HOC for Providers
  const [techStackApi, TechStackProvider] = newSmart(TechStackService);

  return (
    <TechStackProvider>
      <Layout>
        <ProfileCard />
        <TechStack />
      </Layout>
    </TechStackProvider>
  );
};

export default Home;
