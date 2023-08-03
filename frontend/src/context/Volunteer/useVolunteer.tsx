"use client";
import { createContext, ReactNode, useContext } from "react";
import type { AxiosResponse } from "axios";

import { Axios } from "@lib/axios/axios";

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

		return await Axios({
			method: "GET",
			url: `/service/get-orders/`,
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

		return await Axios({
			method: "GET",
			url: `/service/get-available-orders/`,
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

		await Axios({
			method: "PUT",
			url: `/service/orders/${id}/assign/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).catch((error) => {
			console.log(error);
		});
	}
	async function denyOrder(id: number) {
		if (!cookie.access) return;

		await Axios({
			method: "PUT",
			url: `/service/orders/${id}/deny/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).catch((error) => {
			console.log(error);
		});
	}
	async function updateProfile({ company, rating }: IUpdateProfile) {
		if (!cookie.access) return;

		await Axios({
			method: "POST",
			url: `/service/update-volunteer-profile/`,
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
		return await Axios({
			method: "GET",
			url: `/service/get-top/2/`,
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
