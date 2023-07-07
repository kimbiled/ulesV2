export type TUser = {
	email: string;
	user_type: EUserType;
	phone: string;
};

export const enum EUserType {
	volunteer = 2,
	shop = 3,
	recipient = 4,
}

export interface ISignUp {
	email: string;
	user_type: EUserType;
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

export interface ISignInResponse {
	access?: string;
	refresh?: string;
}

export interface IGetUser {}
