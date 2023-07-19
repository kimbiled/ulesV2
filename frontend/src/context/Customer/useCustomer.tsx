"use client";
import { createContext, ReactNode, useContext } from "react";
import axios from "axios";

import { IUpdateProfile } from "@context/Customer/types";

import config from "@root/config";

interface CustomerContextProps {
	updateProfile: (updateProfile: IUpdateProfile) => Promise<void>;
	getNorm: (id: string) => Promise<any>;
	getOrders: () => Promise<any[]>;
}

const CustomerContext = createContext({} as CustomerContextProps);

export function useCustomer(): CustomerContextProps {
	return useContext(CustomerContext);
}
export function CustomerProvider({ children }: { children: ReactNode }) {
	const access = localStorage.getItem("access");
	async function updateProfile({ address, norm_name }: IUpdateProfile) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-customer-profile/`,
			data: {
				address,
				norm_name,
			} satisfies IUpdateProfile,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}

	async function getNorm(id: string) {
		if (!access) return;
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-norm/${id}`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).then((response) => {
			return response.data;
		});
	}

	async function getOrders() {
		if (!access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-orders/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).then((response) => {
			return response.data;
		});
	}

	const values: CustomerContextProps = {
		updateProfile,
		getNorm,
		getOrders,
	};
	return <CustomerContext.Provider value={values}>{children}</CustomerContext.Provider>;
}
