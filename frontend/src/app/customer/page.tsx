import Customer from "@routes/customer/customer";

import { useUser } from "@hooks/user/useUser";

import Layout from "@components/Layout/Layout";

export default async function page() {
	const { user } = await useUser();

	return (
		<Layout>
			<Customer user={user} />
		</Layout>
	);
}
