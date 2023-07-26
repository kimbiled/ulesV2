"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@hooks/user/useUser";

export default async function Profile() {
	const { push } = useRouter();

	useEffect(() => {
		useUser(localStorage.getItem("access")).then((props) => {
			if (!props.user) return push("/login");

			if (props.user.user_type === 2) return push("/volunteer");
			if (props.user.user_type === 3) return push("/shop");
			if (props.user.user_type === 4) return push("/customer");
		});
	}, []);

	return <></>;
}
