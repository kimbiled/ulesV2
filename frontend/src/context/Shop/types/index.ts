export type TProduct = {
	id: number;
	product_name: string;
	quantity_per_unit: number;
	units_in_stock: number;
	units_on_order: number;
	discontinued: boolean;
	category_name: string;
};

export type TCategory = {
	category_name: string;
	description: string;
};
export interface ICreateProduct extends Omit<TProduct, "id"> {}

export interface IUpdateProfile {
	address: string;
	company: string;
	rating?: number;
}

export interface IUpdateProduct extends TProduct {}
