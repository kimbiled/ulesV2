import Hero from '@components/Hero/Hero';
import Ranks from '@components/Ranks/Ranks';
import Stats from '@components/Stats/Stats';
import System from '@components/System/System';
import Phone from '@components/Phone/Phone';
import Community from '@components/Community/Community';

import styles from '@root/style';
import Layout from '@components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className={`bg-primary ${styles.flexStart} w-[100%]`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <Ranks />
          <Stats />
          <System />
          <Phone />
          <Community />
        </div>
      </div>
    </Layout>
  );
}
