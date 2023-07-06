'use client';

import Navbar from '@root/components/Header/Navbar';
import Footer from '@root/components/Footer/Footer';
import Community from '../components/Community/Community';
import Phone from '../components/Phone/Phone';
import styles from '@root/style';
import Hero from '@root/components/Hero/Hero';
import Stats from '@root/components/Stats/Stats';
import Ranks from '@root/components/Ranks/Ranks';
export default function Home() {
  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
          <Ranks></Ranks>
          <Stats></Stats>
          <Phone />
          <Community />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
