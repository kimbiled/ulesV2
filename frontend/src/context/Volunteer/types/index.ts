export type TOrder = {
	id: number;
	customer: TCustomer;
	volunteer: TVolunteer;
	order_date: string;
	order_details: TOrderDetail[];
};

export type TAvailableOrder = Omit<TOrder, "volunteer">;

export interface IUpdateProfile {
	company: string;
	rating?: number;
}

type TCustomer = {
	user: number;
	address: string;
	norm: null;
	name: string;
	phone?: string;
	email?: string;
};
type TVolunteer = {
	user: number;
	company: string;
	rating: number;
	order_count: number;
	name: string;
	phone?: string;
	email?: string;
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

export type TOrderDetail = {
	id: number;
	product: TProduct;
	quantity: number;
};

export type TTop = {
	data: {
		user: {
			email: string;
			user_type: number;
			phone: string;
			name: string;
		};
		profile: {
			company: string;
			rating: number;
		};
		rank: number;
	}[];
};
