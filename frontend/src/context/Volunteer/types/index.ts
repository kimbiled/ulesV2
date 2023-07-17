export type TOrder = {
	id: number;
	customer: {
		user: number;
		address: string;
		norm: null;
	};
	volunteer: {
		user: number;
		company: string;
		rating: number;
		order_count: number;
	} | null;
	order_date: string;
	order_details: [];
};

export interface IUpdateProfile {
	company: string;
	rating?: number;
}
