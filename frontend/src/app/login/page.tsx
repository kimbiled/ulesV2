"use client";
import styles from "../../style";
import Header from "@components/Header/Header";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useAuth } from "@context/Auth/useAuth";
import { useUser } from "@context/User/useUser";
import { useRouter } from "next/navigation";

export default function Login() {
	const { signIn } = useAuth();
	const { user } = useUser();

	const { push, refresh } = useRouter();

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (user) return push("/");
	}, [user]);

	return (
		<div className="bg-primary h-screen w-full overflow-hidden">
			<div className={`${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Header />
				</div>
			</div>
			<div className={`${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
						<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
							<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
								<h2
									className="text-xl font-bold leading-tight tracking-tight 
                              text-gray-900 md:text-2xl text-center"
								>
									Войти
								</h2>

								<form
									className="space-y-4 md:space-y-6"
									action="#"
									onSubmit={async (event) => {
										event.preventDefault();
										if (!emailRef.current) return;
										if (!passwordRef.current) return;

										await signIn({
											email: emailRef.current.value,
											password: passwordRef.current.value,
										}).then(() => {
											refresh();
											window.location.reload();
										});
									}}
								>
									<div>
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
											Ваша эл-почта
										</label>
										<input
											type="text"
											name="email"
											id="email"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder=""
											ref={emailRef}
										/>
									</div>
									<div>
										<label
											htmlFor="password"
											className="block mb-2 text-sm font-medium text-gray-900"
										>
											Пароль
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											ref={passwordRef}
										/>
									</div>

									<button
										type="submit"
										className="w-full text-white bg-gray-600 
                                 hover:bg-primary-700 focus:ring-4 focus:outline-none 
                                 focus:ring-primary-300 font-medium rounded-lg 
                                 text-sm px-5 py-2.5 
                                 text-center"
									>
										Войти
									</button>
									<p className="text-sm font-light text-gray-500">
										Нет аккаунта?{" "}
										<Link
											href={"/register"}
											className="font-medium text-primary-600 hover:underline"
										>
											Зарегистрироватся
										</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
