"use client";
import { createContext, ReactNode, useContext } from "react";
import axios from "axios";

import { IUpdateProfile } from "@context/Customer/types";

import config from "@root/config";

interface CustomerContextProps {
	updateProfile: (updateProfile: IUpdateProfile) => Promise<void>;
}

const CustomerContext = createContext({} as CustomerContextProps);

export function useCustomer(): CustomerContextProps {
	return useContext(CustomerContext);
}
export function CustomerProvider({ children }: { children: ReactNode }) {
	const access = localStorage.getItem("access");
	async function updateProfile({ address }: IUpdateProfile) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-customer-profile/`,
			data: {
				address,
			} satisfies IUpdateProfile,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}

	const values: CustomerContextProps = {
		updateProfile,
	};
	return <CustomerContext.Provider value={values}>{children}</CustomerContext.Provider>;
}
