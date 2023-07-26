import { ShopProvider } from "@context/Shop/useShop";

import Shop from "@routes/shop/shop";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";
export default function page() {
	return (
		<ProtectedRoute>
			<ShopProvider>
				<Shop />
			</ShopProvider>
		</ProtectedRoute>
	);
}
