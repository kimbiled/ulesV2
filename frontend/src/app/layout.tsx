import { ReactNode } from "react";
import { Metadata } from "next";

import { Inter } from "next/font/google";
import "./default.scss";

import { AuthProvider } from "@context/Auth/useAuth";
import { ShopProvider } from "@context/Shop/useShop";
import { CustomerProvider } from "@context/Customer/useCustomer";
import { VolunteerProvider } from "@context/Volunteer/useVolunteer";
import { UserProvider } from "@context/User/useUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ules",
	description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<UserProvider>
						<ShopProvider>
							<VolunteerProvider>
								<CustomerProvider>{children}</CustomerProvider>
							</VolunteerProvider>
						</ShopProvider>
					</UserProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
