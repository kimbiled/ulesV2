import { AxiosResponse } from "axios";

import { useAxios } from "@hooks/axios/useAxios";

import { TUser } from "@hooks/user/types";

interface useUserProps {
	user: TUser | null;
}

export async function useUser(accessToken: string | null): Promise<useUserProps> {
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
			.catch(() => {
				return null;
			});
	}

	const user: TUser | null = await getMe();
	return {
		user,
	};
}
