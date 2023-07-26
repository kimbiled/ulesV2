"use client";
import Header from "@components/Header/Header";
import Menu from "./menu";
import Info from "./info";
import Profile from "./profile";
import Statistics from "./statistics";
import Orders from "./orders";
import { useState } from "react";
export default function Shop() {
	const [page, setPage] = useState(1);

	function changePage(newPage: number) {
		setPage(newPage);
	}

	return (
		<>
			<Header />
			<div className="flex h-[calc(100vh-80px) fontRaleway">
				<Menu setPage={changePage} />
				{page === 1 ? <Profile /> : page === 2 ? <Statistics /> : page === 3 ? <Info /> : null}
			</div>
		</>
	);
}
