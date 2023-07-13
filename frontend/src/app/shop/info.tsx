import { useRef } from "react";
import { useRouter } from "next/navigation";

import { useShop } from "@context/Shop/useShop";
import { useAuth } from "@context/Auth/useAuth";

export default function Info() {
	const { push } = useRouter();
	const { updateProfile } = useShop();
	const { refreshUser } = useAuth();

	const addressRef = useRef<HTMLInputElement>(null);
	const companyRef = useRef<HTMLInputElement>(null);

	return (
		<div className="px-6 py-6 lg:px-8 flex justify-center items-center w-[100%] flex-col">
			<div className="bg-white rounded-lg shadow-lg p-6">
				<h3 className="mb-4 text-xl font-medium text-gray-900 ">Заполните форму для добавление товара</h3>
				<form
					className="space-y-6"
					onSubmit={async (event) => {
						event.preventDefault();
						if (!addressRef.current || !companyRef.current) return;

						await updateProfile({
							address: addressRef.current.value,
							company: companyRef.current.value,
							rating: 0,
						}).then(() => {
							const access = localStorage.getItem("access");
							if (!access) return;
							refreshUser(access);
							push("/profile");
						});
					}}
				>
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900">Адрес магазина</label>
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Мәңгілік Ел 16"
							required
							ref={addressRef}
						/>
					</div>
					<div>
						<label className="block mb-2 text-sm font-medium text-gray-900 ">Название организации</label>
						<input
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							placeholder="Magnum"
							required
							ref={companyRef}
						/>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>
						Сохранить
					</button>
				</form>
			</div>
		</div>

		// <div className="flex justify-center items-center py-6 absolute z-1 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-screen h-screen scrollHide drop-shadow-2xl">
		// 	<div className="w-4/12 h-5/12 rounded-xl bg-white shadow-lg flex justify-center p-6 ">
		// 		<div className="relative w-full max-w-md max-h-full">
		// 			<div className="relative bg-white rounded-lg  ">
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
