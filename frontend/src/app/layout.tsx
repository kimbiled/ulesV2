import { ReactNode } from "react";
import { Metadata } from "next";

import { Inter } from "next/font/google";
import "./default.scss";

import { AuthProvider } from "@context/Auth/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ules",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	);
}
