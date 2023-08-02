import { ReactNode } from "react";

import { CustomCookieProvider } from "@context/CustomCookie/useCustomCookie";
import { AuthProvider } from "@context/Auth/useAuth";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<CustomCookieProvider>
			<AuthProvider>{children}</AuthProvider>
		</CustomCookieProvider>
	);
}
