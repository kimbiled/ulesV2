"use client";
import { useState } from "react";

import Menu from "./menu";
import Info from "./info";
import Profile from "./profile";
import Statistics from "./statistics";

import type { TUser } from "@hooks/user/types";

export default function Shop({ user }: { user: TUser | null }) {
	const [page, setPage] = useState<number>(1);

	return (
		<div className="flex h-[calc(100vh-80px) fontRaleway">
			<Menu setPage={setPage} />
			{page === 1 ? <Profile user={user} /> : page === 2 ? <Statistics /> : page === 3 ? <Info /> : null}
		</div>
	);
}
