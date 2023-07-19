"use client";
import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosResponse } from "axios";

import config from "@root/config";
import { IUpdateProfile, TAvailableOrder, TOrder, TTop } from "@context/Volunteer/types";

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
	const access = localStorage.getItem("access");

	async function getOrders() {
		if (!access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-orders/`,
			headers: {
				Authorization: `Bearer ${access}`,
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
		if (!access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-available-orders/`,
			headers: {
				Authorization: `Bearer ${access}`,
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
		if (!access) return;

		await axios({
			method: "PUT",
			url: `${config.BACKEND_HOST}/service/orders/${id}/assign/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).catch((error) => {
			console.log(error);
		});
	}
	async function denyOrder(id: number) {
		if (!access) return;

		await axios({
			method: "PUT",
			url: `${config.BACKEND_HOST}/service/orders/${id}/deny/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).catch((error) => {
			console.log(error);
		});
	}
	async function updateProfile({ company, rating }: IUpdateProfile) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-volunteer-profile/`,
			data: {
				company,
				rating,
			} satisfies IUpdateProfile,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}
	async function getTop() {
		if (!access) return null;

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-top/2/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
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
