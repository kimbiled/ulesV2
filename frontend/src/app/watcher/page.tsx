import Watcher from '@routes/watcher/watcher'
import Layout from '@components/Layout/Layout';


export default async function page() {

	return (
		<Layout>
			<Watcher />
		</Layout>
	);
}
