"use client";
import { createContext, ReactNode, useContext } from "react";
import type { AxiosResponse } from "axios";

import { useCustomCookie } from "@context/CustomCookie/useCustomCookie";

import { Axios } from "@lib/axios/axios";

import type { TOrder } from "@context/Volunteer/types";

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
	const { cookie } = useCustomCookie();
	async function updateProfile(address: string) {
		if (!cookie.access) return;

		await Axios({
			method: "POST",
			url: `/service/update-customer-profile/`,
			data: {
				address,
			},
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		});
	}

	async function orderConfirm(orderId: number) {
		if (!cookie.access) return;

		await Axios({
			method: "POST",
			url: `/service/orders/confirm/${orderId}/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		});
	}

	async function getNorm(id: number) {
		if (!cookie.access) return null;
		return await Axios({
			method: "GET",
			url: `/service/get-norm/${id}/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).then((response: AxiosResponse) => {
			return response.data;
		});
	}

	async function getOrder() {
		if (!cookie.access) return null;

		return await Axios({
			method: "GET",
			url: `/service/get-orders/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
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
