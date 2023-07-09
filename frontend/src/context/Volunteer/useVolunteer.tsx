"use client";
import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosResponse } from "axios";

import config from "@root/config";
import { TOrder } from "@context/Volunteer/types";

interface VolunteerContextProps {
	getOrders: () => Promise<TOrder[] | void>;
	assignOrder: (id: string) => Promise<void>;
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
			url: `${config.BACKEND_HOST}/service/get-volunteer/orders/`,
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

	async function assignOrder(id: string) {
		await axios({
			method: "PUT",
			url: `${config.BACKEND_HOST}/service/orders/${id}/assign`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const values: VolunteerContextProps = {
		getOrders,
		assignOrder,
	};
	return <VolunteerContext.Provider value={values}>{children}</VolunteerContext.Provider>;
}
