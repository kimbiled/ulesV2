export type TOrder = {
	id: number;
	customer: number;
	volunteer: number;
	order_date: string;
};

export interface IUpdateProfile {
	company: string;
	rating?: number;
}
