"use client";
import { useEffect } from "react";
import { useAuth } from "@context/Auth/useAuth";
import { redirect } from "next/navigation";

export default function Profile() {
	const { user } = useAuth();

	useEffect(() => {
		if (!user) return redirect("/login");

		if (user.user_type === 2) redirect("/volunteer");
		if (user.user_type === 3) redirect("/shop");
		if (user.user_type === 4) redirect("/customer");
	}, []);

	return <></>;
}
