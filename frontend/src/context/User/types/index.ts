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
} & (
	| {
			user_type: 2;
			company: string;
			rating: number;
	  }
	| {
			user_type: 3;
			address: string;
			company: string;
			rating: number;
	  }
	| {
			user_type: 4;
			address: string;
			norm_name: string;
	  }
);

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
