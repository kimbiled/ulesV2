"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ISignIn, ISignUp, TTokens, TUser } from "./types";
import axios, { AxiosResponse } from "axios";
import config from "@root/config";

interface AuthContextProps {
	user: TUser | null;
	signUp: ({ email, name, user_type, phone, password }: ISignUp) => Promise<void>;
	signIn: ({ email, password }: ISignIn) => Promise<void>;
	refreshUser: (access: string) => Promise<void>;
	logOut: () => void;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<TUser | null>(null);

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
	}
	async function getUser(access: string) {
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-profile/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		})
			.then((response: AxiosResponse<TUser | null>) => {
				return response.data;
			})
			.catch(() => {
				return null;
			});
	}
	async function refreshUser(access: string) {
		const [user] = await Promise.all([getUser(access)]);
		setUser(user);
	}
	useEffect(() => {
		const access = localStorage.getItem("access");
		if (!access) return setIsLoading(false);

		Promise.all([getUser(access)])
			.then(([user]) => {
				setUser(user);
				setIsLoading(false);
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});

		return () => {
			setUser(null);
		};
	}, []);

	useEffect(() => {
		const refresh = localStorage.getItem("refresh");
		if (!refresh) return;

		setTimeout(async () => {
			await refreshTokens(refresh);
		}, 1000 * 60 * 5);
	}, []);

	const values: AuthContextProps = {
		user,
		signUp,
		signIn,
		refreshUser,
		logOut,
	};

	return <AuthContext.Provider value={values}>{!isLoading && children}</AuthContext.Provider>;
}
