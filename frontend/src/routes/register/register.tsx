"use client";
import { useRef } from "react";
import Link from "next/link";

import styles from "../../style";

import { useAuth } from "@context/Auth/useAuth";
export default function Register() {
	const { signUp } = useAuth();

	const emailRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const roleRef = useRef<HTMLSelectElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	return (
		<div className={`${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 mt-8 mb-8">
					<div className="w-96 bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
								Создать аккаунт
							</h2>
							<form
								className="space-y-4 md:space-y-6"
								action="#"
								onSubmit={async (event) => {
									event.preventDefault();
									if (
										!emailRef.current ||
										!passwordRef.current ||
										!roleRef.current ||
										!phoneRef.current ||
										!nameRef.current
									)
										return;
									await signUp({
										email: emailRef.current.value,
										name: nameRef.current.value,
										user_type: Number(roleRef.current.value),
										password: passwordRef.current.value,
										phone: phoneRef.current.value,
									}).then(() => {
										window.location.reload();
									});
								}}
							>
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
										Ваша эл-почта
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="name@email.com"
										ref={emailRef}
									/>
								</div>
								<div>
									<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
										Ваше имя
									</label>
									<input
										type="text"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Ваше имя"
										ref={nameRef}
									/>
								</div>
								<div>
									<label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900">
										Выберите вашу роль
									</label>
									<select
										id="roles"
										className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 h-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										ref={roleRef}
									>
										<option value="2">Волонтер</option>
										<option value="3">Магазин</option>
										<option value="4">Получатель</option>
									</select>
								</div>
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
										Номер телефона
									</label>
									<input
										type="text"
										name="phone"
										id="phone"
										placeholder="+7 333 222 11 00"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										ref={phoneRef}
									/>
								</div>
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
										Пароль
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full h-10 p-2.5"
										ref={passwordRef}
									/>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-ulsDark 
                      hover:bg-primary-700 focus:ring-4 focus:outline-none 
                      focus:ring-primary-300 font-medium rounded-lg 
                      text-sm h-10 
                      text-center"
								>
									Создать аккаунт
								</button>
								<p className="text-sm font-light text-gray-500">
									Уже есть аккаунт?{" "}
									<Link href={"/auth/login"} className="font-medium text-primary-600 hover:underline">
										Войти
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
