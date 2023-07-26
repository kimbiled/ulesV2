import axios, { AxiosRequestConfig } from "axios";
import { MainConfig } from "@config/main";

export function useAxios(params: AxiosRequestConfig) {
	return axios({
		baseURL: MainConfig.BACKEND_HOST,
		...params,
	});
}
