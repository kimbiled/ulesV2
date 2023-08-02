"use client";
import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosResponse } from "axios";

import config from "@root/config";

import { useCustomCookie } from "@context/CustomCookie/useCustomCookie";

import type { IUpdateProfile, TAvailableOrder, TOrder, TTop } from "@context/Volunteer/types";

interface VolunteerContextProps {
	getOrders: () => Promise<TOrder[] | void>;
	getAvailableOrders: () => Promise<TAvailableOrder[] | void>;
	assignOrder: (id: number) => Promise<void>;
	denyOrder: (id: number) => Promise<void>;
	updateProfile: (updateProfile: IUpdateProfile) => Promise<void>;
	getTop: () => Promise<TTop | null>;
}

const VolunteerContext = createContext({} as VolunteerContextProps);

export function useVolunteer(): VolunteerContextProps {
	return useContext(VolunteerContext);
}

export function VolunteerProvider({ children }: { children: ReactNode }) {
	const { cookie } = useCustomCookie();

	async function getOrders() {
		if (!cookie.access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-orders/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		})
			.then((response: AxiosResponse<TOrder[]>) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async function getAvailableOrders() {
		if (!cookie.access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-available-orders/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		})
			.then((response: AxiosResponse<TAvailableOrder[]>) => {
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async function assignOrder(id: number) {
		if (!cookie.access) return;

		await axios({
			method: "PUT",
			url: `${config.BACKEND_HOST}/service/orders/${id}/assign/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).catch((error) => {
			console.log(error);
		});
	}
	async function denyOrder(id: number) {
		if (!cookie.access) return;

		await axios({
			method: "PUT",
			url: `${config.BACKEND_HOST}/service/orders/${id}/deny/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).catch((error) => {
			console.log(error);
		});
	}
	async function updateProfile({ company, rating }: IUpdateProfile) {
		if (!cookie.access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-volunteer-profile/`,
			data: {
				company,
				rating,
			} satisfies IUpdateProfile,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		});
	}
	async function getTop() {
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-top/2/`,
		}).then((response: AxiosResponse<TTop>) => {
			return response.data;
		});
	}

	const values: VolunteerContextProps = {
		getOrders,
		assignOrder,
		updateProfile,
		getAvailableOrders,
		denyOrder,
		getTop,
	};
	return <VolunteerContext.Provider value={values}>{children}</VolunteerContext.Provider>;
}
