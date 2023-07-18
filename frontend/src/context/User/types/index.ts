// export type TUser =
// 	| {
// 			name: string;
// 			email: string;
// 			user_type: number;
// 			phone: string;
// 			address: string;
// 			company: string;
// 			rating: number;
// 	  }
// 	| {};

export type TUser = {
	name: string;
	email: string;
	phone: string;
	user_type: number;
	company: string;
	address: string;
	rating: number;
	norm_name: string;
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
