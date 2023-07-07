"use client";
import { ReactNode } from "react";

import Navbar from "@components/Header/Navbar";
import Footer from "@components/Footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			<main className={"flex flex-1 m-auto w-[85%]"}>{children}</main>
			<Footer />
		</>
	);
}
