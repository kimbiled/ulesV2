import Volunteer from "@routes/volunteer/volunteer";

import { VolunteerProvider } from "@context/Volunteer/useVolunteer";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

export default function page() {
	return (
		<ProtectedRoute>
			<VolunteerProvider>
				<Volunteer />
			</VolunteerProvider>
		</ProtectedRoute>
	);
}
