import Customer from "@routes/customer/customer";
import { CustomerProvider } from "@context/Customer/useCustomer";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";

export default function page() {
	return (
		<ProtectedRoute>
			<CustomerProvider>
				<Customer />
			</CustomerProvider>
		</ProtectedRoute>
	);
}
