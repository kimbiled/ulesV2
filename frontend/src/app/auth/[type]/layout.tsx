import { ReactNode } from "react";

import { CustomCookieProvider } from "@context/CustomCookie/useCustomCookie";
import { AuthProvider } from "@context/Auth/useAuth";

import Layout from "@components/Layout/Layout";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<CustomCookieProvider>
			<AuthProvider>
				<Layout>{children}</Layout>
			</AuthProvider>
		</CustomCookieProvider>
	);
}
