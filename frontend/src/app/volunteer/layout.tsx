import { ReactNode } from "react";

import { CustomCookieProvider } from "@context/CustomCookie/useCustomCookie";
import { VolunteerProvider } from "@context/Volunteer/useVolunteer";

import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<ProtectedRoute>
			<CustomCookieProvider>
				<VolunteerProvider>{children}</VolunteerProvider>
			</CustomCookieProvider>
		</ProtectedRoute>
	);
}
