"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { TUser } from "@context/User/types";

import config from "@root/config";

interface UserContextProps {
	user: TUser | null;
	refreshUser: (access: string) => Promise<void>;
}

const UserContext = createContext({} as UserContextProps);

export function useUser(): UserContextProps {
	return useContext(UserContext);
}

export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<TUser | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

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
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});

		return () => {
			setUser(null);
		};
	}, []);

	const values: UserContextProps = {
		user,
		refreshUser,
	};
	return <UserContext.Provider value={values}>{!isLoading && children}</UserContext.Provider>;
}
