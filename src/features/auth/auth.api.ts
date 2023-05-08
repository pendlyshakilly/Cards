import { instance } from "common/api/common.api";
import axios from "axios";

export const authApi = {
		register: (arg: ArgRegisterType1) => {
				return instance.post<RegisterResponseType>("auth/register", arg);
		},
		login: (arg: ArgLoginType) => {
				return instance.post<ProfileType>("auth/login", arg);
		},
		authMe: () => {
				return instance.post("auth/me", );
		},
		forgotPassword: (payload: ForgotPassType) => {
				return instance.post<ResponseForgotPassAType>("auth/forgot", payload);
		},
		createPassword: (payload: CreatePassType) => {
				return instance.post("auth/set-new-password", payload);
		},
		logOut: () => {
				return instance.delete<{info:string}>("/auth/me" );
		},
		updateDataProfile: (payload:ChangeDataProfileType) => {
				return instance.put<ResponseChangeDataProfileType>("/auth/me", payload );
		}

};


// Types
// export type ArgRegisterType = {
//   email: string
//   password: string
// }

export type ResponseChangeDataProfileType = {
		token: string
		tokenDeathTime: number
		error?: string
		updatedUser:RegisterResponseType
}
export type ChangeDataProfileType = {
		name:string,
		avatar?:string
}

export type ResponseForgotPassAType = {
	info: string;
	success: boolean;
	answer: boolean;
	html: boolean;
}
export type CreatePassType = {
		password: string
		resetPasswordToken?: string
}


export type ForgotPassType = {
		email: string
		from?: string
		message?: string
}

export type ArgLoginType = {
		email: string
		password: string | number
		rememberMe: boolean
}
export type ArgRegisterType1 = Omit<ArgLoginType, "rememberMe">

export type RegisterResponseType = {
		addedUser: Omit<ProfileType, "token" | "tokenDeathTime">
}

export type ProfileType = {
		_id: string;
		email: string;
		rememberMe: boolean;
		isAdmin: boolean;
		name: string;
		verified: boolean;
		publicCardPacksCount: number;
		created: string;
		updated: string;
		__v: number;
		token: string;
		tokenDeathTime: number;
}
