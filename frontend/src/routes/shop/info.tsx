import { useRef } from "react";
import { useRouter } from "next/navigation";

import { useShop } from "@context/Shop/useShop";

export default function Info() {
	const { push, refresh } = useRouter();
	const { updateProfile } = useShop();

	const addressRef = useRef<HTMLInputElement>(null);
	const companyRef = useRef<HTMLInputElement>(null);

	return (
		<div className="px-6 py-6 lg:px-8 flex justify-center items-center w-[100%] flex-col">
			<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h3 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Заполните форму для добавление товара
					</h3>
					<form
						className="space-y-4 md:space-y-6"
						onSubmit={async (event) => {
							event.preventDefault();
							if (!addressRef.current || !companyRef.current) return;

							await updateProfile({
								address: addressRef.current.value,
								company: companyRef.current.value,
							}).then(() => {
								push("/profile");
								refresh();
							});
						}}
					>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Адрес магазина
							</label>
							<input
								placeholder="Мәңгілік Ел 16"
								required
								ref={addressRef}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<div>
							<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Название организации
							</label>
							<input
								placeholder="Magnum"
								required
								ref={companyRef}
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>

						<button
							type="submit"
							className="w-full text-white bg-ulsDark hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
						>
							Сохранить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
