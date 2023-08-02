import Volunteer from '@routes/volunteer/volunteer';

import Layout from "@components/Layout/Layout";

import { useUser } from "@hooks/user/useUser";

export default async function page() {
	const { user } = await useUser();

	return (
		<Layout>
			<Volunteer user={user} />
		</Layout>
	);
}
