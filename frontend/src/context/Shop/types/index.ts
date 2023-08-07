export type TProduct = {
	id: number;
	product_name: string;
	quantity_per_unit: number;
	units_in_stock: number;
	units_on_order: number;
	discontinued: boolean;
	category_name: string;
	unit_of_measurement: "г" | "мл" | "шт";
};

export type TCategory = {
	category_name: string;
	description: string;
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

export interface ICreateProduct {
	category_name: string;
	product_name: string;
	quantity_per_unit: number;
	units_in_stock: number;
	units_on_order: number;
	discontinued: boolean;
}

export interface IUpdateProfile {
	address: string;
	company?: string;
	rating?: number;
	rank?: number;
}

export interface IUpdateProduct {
	id: number;
	category_name: string;
	product_name: string;
	quantity_per_unit: number;
	units_in_stock: number;
	units_on_order: number;
	discontinued: boolean;
}
