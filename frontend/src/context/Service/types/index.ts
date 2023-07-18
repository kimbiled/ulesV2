type TVolunteerInfo = {
	company: string;
	rating: number;
};
type TShopInfo = {
	address: string;
	company: string;
	rating: number;
};
export interface IGetShopTopResponse {
	data: TShopInfo[];
}

export interface IGetVolunteerTopResponse {
	data: TVolunteerInfo[];
}
