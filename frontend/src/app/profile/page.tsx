"use client";
import { useEffect } from "react";
import { useAuth } from "@context/Auth/useAuth";
import { useRouter } from "next/navigation";

export default function Profile() {
	const { user } = useAuth();
	const { push } = useRouter();

	useEffect(() => {
		if (!user) return push("/login");

		if (user.user_type === 2) push("/volunteer");
		if (user.user_type === 3) push("/shop");
		if (user.user_type === 4) push("/customer");
	}, []);

	return <></>;
}
