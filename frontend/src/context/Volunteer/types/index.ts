export type TOrder = {
	id: number;
	customer: TCustomer;
	volunteer: TVolunteer;
	order_date: string;
	order_details: TOrderDetail[];
};

export interface IUpdateProfile {
	company: string;
	rating?: number;
}

type TCustomer = {
	user: number;
	address: string;
	norm: null;
};
type TVolunteer = {
	user: number;
	company: string;
	rating: number;
	order_count: number;
};
type TShop = {
	user: number;
	address: string;
	company: string;
	rating: number;
	help_count: number;
};

type TCategory = {
	id: number;
	category_name: string;
	description: string;
	unit_of_measurement: string;
};

type TProduct = {
	id: number;
	product_name: string;
	quantity_per_unit: number;
	units_in_stock: number;
	units_on_order: number;
	discontinued: boolean;
	shop: TShop;
	category: TCategory;
};

type TOrderDetail = {
	id: number;
	product: TProduct;
	quantity: number;
};
