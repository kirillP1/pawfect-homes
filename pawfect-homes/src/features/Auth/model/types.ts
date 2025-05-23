export interface ILoginCredentials {
	email: string;
	password: string;
}

export interface ILoginResponse {
	accessToken: string;
	refreshToken: string;
	user: {
		id: string;
		email: string;
		isActivated: boolean;
	};
}

export interface IRefreshResponse {
	accessToken: string;
	refreshToken: string;
	user: {
		id: string;
		email: string;
		isActivated: boolean;
	};
}