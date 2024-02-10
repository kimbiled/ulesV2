import Prisoner from '@routes/prisoner/prisoner'
import Layout from '@components/Layout/Layout';


export default async function page() {

	return (
		<Layout>
			<Prisoner />
		</Layout>
	);
}
