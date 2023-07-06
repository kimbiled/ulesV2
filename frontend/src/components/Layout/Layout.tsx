'use client'
import { ReactNode } from "react";

import Navbar from "@components/Header/Navbar";
import Customer from "../../pages/Costumer/Customer";
import Community from "@components/Community/Community";
import Footer from "@components/Footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
				<main className={"flex flex-1 m-auto w-[85%]"}>
					{children}
				</main>
			<Footer />
		</>
	);
}
