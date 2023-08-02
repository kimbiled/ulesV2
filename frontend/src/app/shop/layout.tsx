import { ReactNode } from "react";

import { CustomCookieProvider } from "@context/CustomCookie/useCustomCookie";
import { ShopProvider } from "@context/Shop/useShop";

import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<ProtectedRoute>
			<CustomCookieProvider>
				<ShopProvider>{children}</ShopProvider>
			</CustomCookieProvider>
		</ProtectedRoute>
	);
}
