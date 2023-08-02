import { redirect } from "next/navigation";

import { useUser } from "@hooks/user/useUser";

export default async function Profile() {
	const { user } = await useUser();

	if (!user) return redirect("/auth/login");

	if (user.user_type === 2) return redirect("/volunteer");
	if (user.user_type === 3) return redirect("/shop");
	if (user.user_type === 4) return redirect("/customer");
	else return redirect("/");
}
