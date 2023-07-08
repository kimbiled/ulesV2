export type TProduct = {
	id: number;
	product_name: string;
	quantity_per_unit: number;
	units_in_stock: number;
	units_on_order: number;
	discontinued: boolean;
	category_name: string;
};

export interface ICreateProduct extends Omit<TProduct, "id"> {}
