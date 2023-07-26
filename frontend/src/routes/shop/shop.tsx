"use client";
import Menu from "./menu";
import Info from "./info";
import Profile from "./profile";
import Statistics from "./statistics";
import { useState } from "react";

import Layout from "@components/Layout/Layout";

export default function Shop() {
	const [page, setPage] = useState<number>(1);

	return (
		<Layout>
			<div className="flex h-[calc(100vh-80px) fontRaleway">
				<Menu setPage={setPage} />
				{page === 1 ? <Profile /> : page === 2 ? <Statistics /> : page === 3 ? <Info /> : null}
			</div>
		</Layout>
	);
}
