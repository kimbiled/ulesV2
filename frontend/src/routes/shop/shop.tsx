"use client";
import { Fragment, useRef, useState, useEffect } from "react";

import { useShop } from "@context/Shop/useShop";

import type { TUser } from "@hooks/user/types";

export default function Shop({ user }: { user: TUser | null }) {
	const { getProducts, createProduct, updateProfile, updateProduct, getCategories, } = useShop();

	const [isChange, setChange] = useState<boolean>(false);

	const addressRef = useRef<HTMLInputElement>(null);

	// useEffect(() => {
	// 	Promise.all([getOrder()])
	// 		.then(([retrievedOrders]) => {
	// 			if (retrievedOrders) setOrder(retrievedOrders);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// }, []);
	const ratings = [
		{
			id: 1,
			rating: 5,
			rank: 1,
			user: 'Danial',
		},
		{
			id: 1,
			rating: 5,
			rank: 2,
			user: 'Danial',
		},
		{
			id: 1,
			rating: 5,
			rank: 3,
			user: 'Danial',
		},
		{
			id: 1,
			rating: 5,
			rank: 4,
			user: 'Danial',
		},
		{
			id: 1,
			rating: 5,
			rank: 5,
			user: 'Danial',
		},
	]
	const wantedProducts = [
		{
			id: 1,
			product: "Хлеб",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 2,
			product: "Молоко",
			measure: "мл",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 3,
			product: "Сметана",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 4,
			product: "Яйца",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 5,
			product: "Мясо",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 6,
			product: "Сыр",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 7,
			product: "Хлопья",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 8,
			product: "Курица",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
		{
			id: 9,
			product: "Яблоко",
			measure: "шт",
			quantity: "5",
			quantity_per_unit: "1000",
			category: "Bread",
		},
	];
	return (
		<div className="fontRaleway flex flex-row justify-around w-screen mt-16 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-row max-xl:gap-3 max-xl:items-center ">
			<div className="max-sm:w-full w-2/5 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
				<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full  h-[75px]">
					Ваши Продукты
				</h4>
				<hr />
					{wantedProducts.map((item) => (
						<div
							key={item.id}
							className="w-full h-18 rounded-xl border-[1px] border-white flex justify-between  text-white p-2"
						>
							<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/4">
								<p className="text-[10px]">Название:</p>
								<p className="text-sm">{item.product}</p>
							</div>
							<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/5">
								<p className="text-[10px]">Количество товара:</p>
								<p className="text-sm">{item.quantity}</p>
							</div>
							<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/5">
								<p className="text-[10px]">{item.measure.charAt(0).toUpperCase() + item.measure.slice(1)} в товаре:</p>
								<p className="text-sm">{item.quantity_per_unit}</p>
							</div>
							<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/4">
								<p className="text-[10px]">Категория товара:</p>
								<p className="text-sm">{item.category}</p>
							</div>
						</div>
					))}
				<hr />
				<div className="flex w-full justify-center flex-center mt-4">
					<button
						className="fontInter hover:bg-stone-200 w-36 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm max-sm:w-28"
						type={"button"}
						onClick={async () => {
							// if (!order) return;

							// await createProduct().then(() => {
							// 	window.location.reload();
							// });
						}}
					>
						Добавить продукт
					</button>
				</div>
			</div>
			<div className="max-sm:w-full w-1/4 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
				<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full h-[75px]">
					Рейтинг
				</h4>
				<hr className="mt-4" />
				<div className="flex flex-col gap-3 w-full">
					<div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto ">
						<div className="flex flex-col">
							<p className="text-xs">{user?.rank} место</p>
							<p>Вы {user?.name}</p>
						</div>
						<div>
							<p className="font-medium text-xl">{user?.rating} ules points</p>
						</div>
					</div>
					{ratings.map((rating) => {
						if (user?.name === rating.user) return;
					return (
							<div
								key={rating.user}
								className="border-white border-[1px] w-full h-14 bg-volunteerColor text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto "
							>
								<div className="flex flex-col">
									<p className="text-xs">{rating.rank} место</p>
									<p>{rating.user}</p>
								</div>
								<div>
									<p className="font-medium text-xl">{rating.rating} ules points</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="max-sm:w-full w-1/4 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
				<div className="flex flex-row justify-start gap-4 items-center h-[75px] text-white w-full">
					<div className="w-[56px] h-[56px] rounded-full bg-gray-400"></div>
					<div>
						<p className="text-lg">{user?.name}</p>
						<p className="text-xs">Данные вашего аккаунта</p>
					</div>
				</div>
				<hr />
				<div className="w-full flex flex-col gap-3 text-white">
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-xs">Ваше имя</p>
						<p>{user?.name}</p>
					</div>
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-xs">Ваша почта</p>
						<p>{user?.email}</p>
					</div>
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-xs">Ваши Ules Поинты</p>
						<p>{user?.rating}</p>
					</div>
					<hr className="my-4"/>
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-xs">Ваш номер телефона</p>
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder="Кабайбай Батыра 51/1"
							disabled={!isChange}
							defaultValue={user?.phone}
							ref={addressRef}
						/>
					</div>
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-[10px]">Ваш адрес</p>
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder="Кабайбай Батыра 51/1"
							disabled={!isChange}
							defaultValue={user?.address}
							ref={addressRef}
						/>
					</div>
					<div className="flex w-full justify-center ">
						<button
							className="fontInter hover:bg-stone-200 w-52 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm"
							onClick={async () => {
								if (!addressRef.current) return;
									if (isChange) await updateProfile(addressRef.current.value).then(() => {});
									setChange((prevState) => !prevState);
							}}
						>
							{isChange ? "Сохранить" : "Изменить"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
