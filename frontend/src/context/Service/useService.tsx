"use client";
import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosResponse } from "axios";

import config from "@root/config";

import { IGetShopTopResponse, IGetVolunteerTopResponse } from "@context/Service/types";

interface ServiceContextProps {}

const ServiceContext = createContext({} as ServiceContextProps);

export function useService(): ServiceContextProps {
	return useContext(ServiceContext);
}

export function ServiceProvider({ children }: { children: ReactNode }) {
	async function getShopsTop() {
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-top/3`,
		}).then((response: AxiosResponse<IGetShopTopResponse>) => {
			return response.data;
		});
	}
	async function getVolunteersTop() {
		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-top/2`,
		}).then((response: AxiosResponse<IGetVolunteerTopResponse>) => {
			return response.data;
		});
	}

	const values: ServiceContextProps = {};
	return <ServiceContext.Provider value={values}>{children}</ServiceContext.Provider>;
}
