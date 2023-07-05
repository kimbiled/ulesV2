import { ReactNode } from "react";

import Header from "@components/Header/Header";
import Customer from "../../pages/Costumer/Customer";
import Community from "@components/Community/Community";
import Footer from "@components/Footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
				<main className={"flex flex-1 m-auto w-[85%]"}>
					{children}
				</main>
			<Footer />
		</>
	);
}
