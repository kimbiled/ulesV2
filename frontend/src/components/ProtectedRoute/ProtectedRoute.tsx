import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@context/User/useUser";

interface ProtectedRouteProps {
	children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
	const { user } = useUser();
	const { push } = useRouter();

	useEffect(() => {
		if (!user) return push("/login");
	}, [user]);

	return <>{children}</>;
}
