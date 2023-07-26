import { AxiosResponse } from "axios";

import { useAxios } from "@hooks/axios/useAxios";

import { TUser } from "@hooks/user/types";

interface useUserProps {
	user: TUser | null;
}

export async function useUser(accessToken: string | null): Promise<useUserProps> {
	let user: TUser | null = null;

	async function getMe() {
		return await useAxios({
			url: "/service/get-profile/",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
			.then((response: AxiosResponse<TUser>) => {
				return response.data;
			})
			.catch((error) => {
				return null;
			});
	}

	user = await getMe();
	return {
		user,
	};
}
