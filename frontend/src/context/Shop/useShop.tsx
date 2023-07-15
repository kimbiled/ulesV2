"use client";
import { createContext, ReactNode, useContext } from "react";
import axios, { AxiosResponse } from "axios";
import config from "@root/config";

import { ICreateProduct, IUpdateProduct, IUpdateProfile, TProduct } from "@context/Shop/types";

interface ShopContextProps {
	getProducts: () => Promise<TProduct[] | void>;
	createProduct: (createProduct: ICreateProduct) => Promise<void>;
	updateProfile: (updateProfile: IUpdateProfile) => Promise<void>;
	updateProduct: (updateProduct: IUpdateProduct) => Promise<void>;
}

const ShopContext = createContext({} as ShopContextProps);

export function useShop(): ShopContextProps {
	return useContext(ShopContext);
}

export function ShopProvider({ children }: { children: ReactNode }) {
	const access = localStorage.getItem("access");

	async function getProducts() {
		if (!access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-products/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		})
			.then((response: AxiosResponse<TProduct[]>) => {
				console.log(response.data);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async function createProduct({
		product_name,
		category_name,
		quantity_per_unit,
		units_in_stock,
		units_on_order,
		discontinued,
	}: ICreateProduct) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/create-new-product/`,
			data: {
				product_name,
				category_name,
				quantity_per_unit,
				units_in_stock,
				units_on_order,
				discontinued,
			} satisfies ICreateProduct,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}
	async function updateProfile({ address, company }: IUpdateProfile) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-shop-profile/`,
			data: {
				address,
				company,
				rating: 0,
			} satisfies IUpdateProfile,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}
	async function updateProduct({
		id,
		product_name,
		category_name,
		quantity_per_unit,
		units_in_stock,
		units_on_order,
		discontinued,
	}: IUpdateProduct) {
		if (!access) return;

		await axios({
			method: "POST",
			url: `${config.BACKEND_HOST}/service/update-product/`,
			data: {
				id,
				product_name,
				category_name,
				quantity_per_unit,
				units_in_stock,
				units_on_order,
				discontinued,
			} satisfies IUpdateProduct,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		});
	}
	async function getOrders() {
		if (!access) return [];

		return await axios({
			method: "GET",
			url: `${config.BACKEND_HOST}/service/get-shop-orders/`,
			headers: {
				Authorization: `Bearer ${access}`,
			},
		}).then((response: AxiosResponse) => {
			return response.data;
		});
	}

	const values: ShopContextProps = {
		getProducts,
		createProduct,
		updateProfile,
		updateProduct,
	};

	return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}
