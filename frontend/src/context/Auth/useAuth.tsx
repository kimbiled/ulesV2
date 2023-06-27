"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { TUser } from "./types";

interface AuthContextProps {
	user: TUser | null;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<TUser | null>(null);

	async function getUser() {
		return null;
	}
	useEffect(() => {
		Promise.all([getUser()]).then((response) => {
			setUser(response[0]);
		});

		setIsLoading(false);
	}, []);

	const values: AuthContextProps = {
		user,
	};

	return <AuthContext.Provider value={values}>{!isLoading && children}</AuthContext.Provider>;
}
