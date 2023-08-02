"use client";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@hooks/user/useUser";

import { TUser } from "@hooks/user/types";

interface ProtectedRouteProps {
	children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { push } = useRouter();

	useEffect(() => {
		useUser(localStorage.getItem("access")).then((props) => {
			if (!props.user) return push("/login");
		});
	}, []);

	return <>{children}</>;
}
