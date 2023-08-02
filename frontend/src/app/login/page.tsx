import Login from "@routes/login/login";
import { AuthProvider } from "@context/Auth/useAuth";

export default function page() {
	return (
		<AuthProvider>
			<Login />
		</AuthProvider>
	);
}
