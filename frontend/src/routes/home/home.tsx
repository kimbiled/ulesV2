import Header from "@components/Header/Header";
import Hero from "@components/Hero/Hero";
import Ranks from "@components/Ranks/Ranks";
import Stats from "@components/Stats/Stats";
import System from "@components/System/System";
import Phone from "@components/Phone/Phone";
import Community from "@components/Community/Community";
import Footer from "@components/Footer/Footer";

import styles from "@root/style";
import { AuthProvider } from "@context/Auth/useAuth";

export default function Home() {
	return (
		<div className="w-full overflow-hidden">
			<div className={`${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<AuthProvider>
						<Header />
					</AuthProvider>
				</div>
			</div>
			<div className={`bg-primary ${styles.flexStart} `}>
				<div className={`${styles.boxWidth}`}>
					<Hero />
					<Ranks />
					<Stats />
					<System />
					<Phone />
					<Community />
				</div>
			</div>
			<Footer />
		</div>
	);
}
