export type TUser = {
	name: string;
	email: string;
	user_type: number;
	phone: string;
	address: string;
	company: string;
	rating: number;
};

type TVolunteerInfo = {
	company: string;
	rating: number;
};
type TShopInfo = {
	address: string;
	company: string;
	rating: number;
};
export interface IGetTopResponse {
	volunteers: TVolunteerInfo[];
	shops: TShopInfo[];
}
