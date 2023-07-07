"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { ISignIn, ISignInResponse, ISignUp, TUser } from "./types";
import axios, { AxiosResponse } from "axios";
import config from "@root/config";

interface AuthContextProps {
	user: TUser | null;
	signUp: ({ email, user_type, phone, password }: ISignUp) => Promise<void>;
	signIn: ({ email, password }: ISignIn) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

export function useAuth(): AuthContextProps {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [user, setUser] = useState<TUser | null>(null);

	async function signUp({ email, user_type, password, phone }: ISignUp) {
		return await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/auth/register/`,
			data: {
				email,
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
		}).then((response: AxiosResponse<ISignInResponse>) => {
			if (!response.data.access || !response.data.refresh) return;

			localStorage.setItem("access", response.data.access);
			localStorage.setItem("refresh", response.data.refresh);
		});
	}
	async function refresh(refresh: string) {
		return await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/auth/login/refresh/`,
			data: {
				refresh,
			},
		}).then((response: AxiosResponse) => {
			console.log(response.data);
		});
	}
	async function getUser(access: string) {
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/user/get-profile/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		})
			.then((response: AxiosResponse<TUser | null>) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
				return null;
			});
	}
	useEffect(() => {
		try {
			const access = localStorage.getItem("access");
			if (!access) return;
			Promise.all([getUser(access)]).then(([user]) => {
				setUser(user);
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const values: AuthContextProps = {
		user,
		signUp,
		signIn,
	};

	return <AuthContext.Provider value={values}>{!isLoading && children}</AuthContext.Provider>;
}
