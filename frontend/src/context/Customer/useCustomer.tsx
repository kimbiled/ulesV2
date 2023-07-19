"use client";
import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosResponse } from "axios";

import config from "@root/config";
import { TOrder } from "@context/Volunteer/types";

interface CustomerContextProps {
	updateProfile: (address: string) => Promise<void>;
	getNorm: (id: number) => Promise<any | null>;
	getOrder: () => Promise<TOrder | null>;
	orderConfirm: (orderId: number) => Promise<void>;
}

const CustomerContext = createContext({} as CustomerContextProps);

export function useCustomer(): CustomerContextProps {
	return useContext(CustomerContext);
}
export function CustomerProvider({ children }: { children: ReactNode }) {
	const access = localStorage.getItem("access");
	async function updateProfile(address: string) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-customer-profile/`,
			data: {
				address,
			},
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}

	async function orderConfirm(orderId: number) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/orders/confirm/${orderId}/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}

	async function getNorm(id: number) {
		if (!access) return null;
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-norm/${id}/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).then((response: AxiosResponse) => {
			return response.data;
		});
	}

	async function getOrder() {
		if (!access) return null;

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-orders/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).then((response: AxiosResponse<TOrder[]>) => {
			return response.data[0];
		});
	}

	const values: CustomerContextProps = {
		updateProfile,
		getNorm,
		getOrder,
		orderConfirm,
	};
	return <CustomerContext.Provider value={values}>{children}</CustomerContext.Provider>;
}
