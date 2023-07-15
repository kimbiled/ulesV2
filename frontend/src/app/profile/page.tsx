"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@context/User/useUser";

export default function Profile() {
	const { user } = useUser();
	const { push } = useRouter();

	useEffect(() => {
		if (!user) return push("/login");

		if (user.user_type === 2) push("/volunteer");
		if (user.user_type === 3) push("/shop");
		if (user.user_type === 4) push("/customer");
	}, []);

	return <></>;
}
