import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Community from "@components/Community/Community";
import Phone from "@components/Phone/Phone";
import Hero from "@components/Hero/Hero";
import Stats from "@components/Stats/Stats";
import Ranks from "@components/Ranks/Ranks";

import styles from "@root/style";
export default function Home() {
	return (
		<div className=" w-full overflow-hidden">
			<div className={` ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Header />
				</div>
			</div>
			<div className={`bg-primary ${styles.flexStart} `}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
					<Ranks />
					<Stats />
					<Phone />
					<Community />
				</div>
			</div>
			<Footer />
		</div>
	);
}
