import Community from '../components/Community/Community'
import Phone from '../components/Phone/Phone'
import styles from '@root/style';
import Layout from '@root/components/Layout/Layout';
export default function Home() {
  return (
    <Layout>
		<div className=" w-full overflow-hidden">
      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
			<Phone />
			<Community />
        </div>
      </div>
    </div>
	</Layout>
  );
}