"use client";
import { createContext, ReactNode, useContext, useEffect } from "react";

import { ISignIn, ISignUp, TTokens } from "@context/Auth/types";
import axios, { AxiosResponse } from "axios";
import config from "@root/config";

interface AuthContextProps {
	signUp: ({ email, name, user_type, phone, password }: ISignUp) => Promise<void>;
	signIn: ({ email, password }: ISignIn) => Promise<void>;
	logOut: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	async function signUp({ email, name, user_type, password, phone }: ISignUp) {
		return await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/auth/register/`,
			data: {
				email,
				name,
				user_type,
				password,
				phone,
			} satisfies ISignUp,
		}).then(async () => {
			await signIn({
				email,
				password,
			});
		});
	}

	async function signIn({ email, password }: ISignIn) {
		return await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/auth/login/`,
			data: {
				email,
				password,
			} satisfies ISignIn,
		}).then((response: AxiosResponse<TTokens>) => {
			if (!response.data.access || !response.data.refresh) return;

			localStorage.setItem("access", response.data.access);
			localStorage.setItem("refresh", response.data.refresh);
		});
	}
	async function refreshTokens(refresh: string) {
		return await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/auth/login/refresh/`,
			data: {
				refresh,
			},
		}).then((response: AxiosResponse<TTokens>) => {
			if (!response.data.refresh || !response.data.access) return;

			console.log(response.data);
			localStorage.setItem("access", response.data.access);
			localStorage.setItem("refresh", response.data.refresh);
		});
	}
	function logOut() {
		localStorage.removeItem("access");
		localStorage.removeItem("refresh");

		window.location.reload();
	}

	useEffect(() => {
		const refresh = localStorage.getItem("refresh");
		if (!refresh) return;

		setTimeout(async () => {
			await refreshTokens(refresh);
		}, 1000 * 60 * 5);
	}, []);

	const values: AuthContextProps = {
		signUp,
		signIn,
		logOut,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}
