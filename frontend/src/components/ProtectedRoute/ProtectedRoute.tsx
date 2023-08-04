import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { useUser } from "@hooks/user/useUser";

interface ProtectedRouteProps {
	children: ReactNode;
}

export default async function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { user } = await useUser();

	if (!user) redirect("/auth/login");
	return <>{children}</>;
}
