import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
	return (
		// <ProtectedRoute>
		// 	<CustomCookieProvider>
		// 		<CustomerProvider>
		// 			{children}
		// 		</CustomerProvider>
		// 	</CustomCookieProvider>
		// </ProtectedRoute>
		<>
			{children}
		</>
	);
}
