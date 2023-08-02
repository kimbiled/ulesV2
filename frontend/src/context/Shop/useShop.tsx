"use client";
import { createContext, ReactNode, useContext } from "react";
import type { AxiosResponse } from "axios";

import { useCustomCookie } from "@context/CustomCookie/useCustomCookie";

import { Axios } from "@lib/axios/axios";

import type { ICreateProduct, IUpdateProduct, IUpdateProfile, TCategory, TProduct } from "@context/Shop/types";

interface ShopContextProps {
	getProducts: () => Promise<TProduct[] | void>;
	createProduct: (createProduct: ICreateProduct) => Promise<void>;
	updateProfile: (updateProfile: IUpdateProfile) => Promise<void>;
	updateProduct: (updateProduct: IUpdateProduct) => Promise<void>;
	getCategories: () => Promise<TCategory[]>;
}

const ShopContext = createContext({} as ShopContextProps);

export function useShop(): ShopContextProps {
	return useContext(ShopContext);
}

export function ShopProvider({ children }: { children: ReactNode }) {
	const { cookie } = useCustomCookie();

	async function getProducts() {
		if (!cookie.access) return [];

		return await Axios({
			method: "GET",
			url: `/service/get-products/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		})
			.then((response: AxiosResponse<TProduct[]>) => {
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
		if (!cookie.access) return;

		await Axios({
			method: "POST",
			url: `/service/create-new-product/`,
			data: {
				product_name,
				category_name,
				quantity_per_unit,
				units_in_stock,
				units_on_order,
				discontinued,
			} satisfies ICreateProduct,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		});
	}
	async function updateProfile({ address, company }: IUpdateProfile) {
		if (!cookie.access) return;

		await Axios({
			method: "POST",
			url: `/service/update-shop-profile/`,
			data: {
				address,
				company,
			} satisfies IUpdateProfile,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
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
		if (!cookie.access) return;

		await Axios({
			method: "POST",
			url: `/service/update-product/`,
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
				Authorization: `Bearer ${cookie.access}`,
			},
		});
	}
	async function getOrders() {
		if (!cookie.access) return [];

		return await Axios({
			method: "GET",
			url: `/service/get-orders/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).then((response: AxiosResponse) => {
			return response.data;
		});
	}

	async function getCategories() {
		if (!cookie.access) return [];

		return await Axios({
			method: "GET",
			url: `/service/get-categories/`,
			headers: {
				Authorization: `Bearer ${cookie.access}`,
			},
		}).then((response: AxiosResponse<TCategory[]>) => {
			return response.data;
		});
	}

	const values: ShopContextProps = {
		getProducts,
		createProduct,
		updateProfile,
		updateProduct,
		getCategories,
	};

	return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}
