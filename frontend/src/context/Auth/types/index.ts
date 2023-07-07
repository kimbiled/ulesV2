export type TUser = {
	name: string;
	email: string;
	user_type: number;
	phone: string;
	address: string;
	company: string;
	rating: number;
};

export interface ISignUp {
	email: string;
	user_type: number;
	password: string;
	phone: string;
}

export interface ISignIn {
	email: string;
	password: string;
}

export type TTokens = {
	access?: string;
	refresh?: string;
};
