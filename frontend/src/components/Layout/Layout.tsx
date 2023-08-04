import { ReactNode } from "react";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

import { AuthProvider } from "@context/Auth/useAuth";
import { CustomCookieProvider } from "@context/CustomCookie/useCustomCookie";

import { useUser } from "@hooks/user/useUser";

export default async function Layout({ children }: { children: ReactNode }) {
	const { user } = await useUser();

	return (
		<>
			<CustomCookieProvider>
				<AuthProvider>
					<Header user={user} />
				</AuthProvider>
			</CustomCookieProvider>
			<main
				className={
					"flex flex-1 items-center justify-center bg-gradient-to-r from-blue-100 from-10% via-[#F9FEF6] via-50% to-blue-100 to-90%"
				}
			>
				{children}
			</main>
			<Footer />
		</>
	);
}
