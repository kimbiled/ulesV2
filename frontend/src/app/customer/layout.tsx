import { ReactNode } from "react";

import { CustomCookieProvider } from "@context/CustomCookie/useCustomCookie";
import { CustomerProvider } from "@context/Customer/useCustomer";

import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<ProtectedRoute>
			<CustomCookieProvider>
				<CustomerProvider>{children}</CustomerProvider>
			</CustomCookieProvider>
		</ProtectedRoute>
	);
}
