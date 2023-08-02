import { useUser } from "@hooks/user/useUser";

import Layout from "@components/Layout/Layout";
import Shop from "@routes/shop/shop";

export default async function page() {
	const { user } = await useUser();

	return (
		<Layout>
			<Shop user={user} />
		</Layout>
	);
}
