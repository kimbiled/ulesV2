import Register from "@routes/register/register";

import { AuthProvider } from "@context/Auth/useAuth";

export default function page() {
	return (
		<AuthProvider>
			<Register />
		</AuthProvider>
	);
}
