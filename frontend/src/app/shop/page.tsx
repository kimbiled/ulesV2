"use client";
import Header from "@components/Header/Header";
import Menu from "./menu";
import Info from "./info";
import Profile from "./profile";
import Statistics from "./statistics";
import Orders from "./orders";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function Shop() {
	const [page, setPage] = useState(1);

	function changePage(newPage: number) {
		setPage(newPage);
	}

	return (
		<>
			<Header />
			<div className={"flex h-[calc(100vh-80px)]" + pjs.className}>
				<Menu setPage={changePage} />
				{page === 1 ? <Profile /> : page === 2 ? <Statistics /> : page === 3 ? <Orders /> : page === 4 ? <Info /> : null}
			</div>
		</>
	);
}
