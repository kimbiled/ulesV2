export type TUser = {
	email: string;
	user_type: number;
	phone: string;
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

export interface ISignUpResponse {
	message: string;
	data: TUser;
}

export type TTokens = {
	access?: string;
	refresh?: string;
};

export interface IGetUser {}
