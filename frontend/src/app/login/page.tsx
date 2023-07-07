"use client";
import styles from "../../style";
import Navbar from "@components/Header/Navbar";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// const handleSubmit = async (event: SyntheticEvent) => {
	// 	event.preventDefault();
	// 	await axios
	// 		.post("http://127.0.0.1:8000/auth/login/", {
	// email: email,
	// password: password,
	// })
	// .then((response) => {
	// const token = response.data.data;
	// console.log(token);
	// localStorage.setItem('token', token);
	// });

	// await router.push("/main");
	// };

	return (
		<div className="bg-primary h-screen w-full overflow-hidden">
			<div className={`${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar />
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

								<form className="space-y-4 md:space-y-6" action="#">
									<div>
										<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
											Ваша эл-почта
										</label>
										<input
											type="text"
											name="email"
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
											placeholder=""
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
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="••••••••"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
