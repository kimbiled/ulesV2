"use client";
import { Fragment, useRef, useState, useEffect } from "react";

import { useShop } from "@context/Shop/useShop";

import type { TUser } from "@hooks/user/types";
import type { TCategory, TProduct, TTop } from "@root/context/Shop/types";

export default function Shop({ user }: { user: TUser | null }) {
	const { getProducts, createProduct, updateProfile, updateProduct, getCategories, getTop } = useShop();

	const [isChange, setChange] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);

	const addressRef = useRef<HTMLInputElement>(null);
	const companyRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);
	const quantity = useRef<HTMLInputElement>(null);
	const quantityPerUnitRef = useRef<HTMLInputElement>(null);
	const categoryNameRef = useRef<HTMLSelectElement>(null);
	const unitsInStockRef = useRef<HTMLInputElement>(null);

	const [topShop, setTopShop] = useState<TTop | null>(null);
	const [products, setProducts] = useState<TProduct[]>([]);
	const [categories, setCategories] = useState<TCategory[]>([]);


	useEffect(() => {
		Promise.all([getTop(), getProducts(), getCategories()]).then(([retrievedTop, retrievedProducts, retrievedCategories]) => {
			setTopShop(retrievedTop);
			setProducts(retrievedProducts);
			setCategories(retrievedCategories);
		});
	}, []);

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
		<>
		<div className="fontRaleway flex flex-row justify-around w-screen mt-16 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-row max-xl:gap-3 max-xl:items-center ">
			<div className="max-sm:w-full w-2/5 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
				<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full  h-[75px]">
					Ваши Продукты
				</h4>
				<hr />
				{
					products.map((product) => {
						return (
							<div
								key={product.id}
								className="w-full h-18 rounded-xl border-[1px] border-white flex justify-between  text-white p-2"
							>
								<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/4">
									<p className="text-[10px]">Название:</p>
									<p className="text-sm">{product.product_name}</p>
								</div>
								<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/5">
									<p className="text-[10px]">Количество товара:</p>
									<p className="text-sm">{product.units_in_stock}</p>
								</div>
								<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/5 te">
									<p className="text-[10px]">	{product.unit_of_measurement} в товаре:</p>
									<p className="text-sm">{product.quantity_per_unit}</p>
								</div>
								<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-1/4">
									<p className="text-[10px]">Категория товара:</p>
									<p className="text-sm">{product.category_name}</p>
								</div>
							</div>
						)
					})
				}
					{/* {wantedProducts.map((item) => (
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
					))} */}
				<hr />
				<div className="flex w-full justify-center flex-center mt-4">
					<button
						className="fontInter hover:bg-stone-200 w-36 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm max-sm:w-28"
						type={"button"}
						onClick={() => {
							setShowModal((prevState) => !prevState);
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
					{
						topShop?.data.map((top) => {
							return (
								<div
									key={top.user.email}
									className="border-white border-[1px] w-full h-14 bg-volunteerColor text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto "
								>
									<div className="flex flex-col">
										<p className="text-xs">{top.rank} место</p>
										<p>{top.user.name}</p>
									</div>
									<div>
										<p className="font-medium text-xl">{top.profile.rating} ules points</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>

			<div className="max-sm:w-full w-1/4 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
				<div className="flex flex-row justify-start gap-4 items-center h-[75px] text-white w-full border-b-[1px] border-white">
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
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-xs">Ваш номер телефона</p>
						<p>{user?.phone}</p>
					</div>
					<hr className="my-4"/>
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-[10px]">Ваш адрес</p>
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder="Адрес"
							disabled={!isChange}
							defaultValue={user?.address}
							ref={addressRef}
						/>
					</div>
					<div className="flex flex-col justify-between rounded-xl border-[1px] border-white p-2 w-full h-14">
						<p className="text-[10px]">Ваша компания</p>
						<input
							type="text"
							className="bg-transparent outline-none"
							placeholder="Название компании"
							disabled={!isChange}
							defaultValue={user?.company}
							ref={companyRef}
						/>
					</div>
					<div className="flex w-full justify-center ">
						<button
							className="fontInter hover:bg-stone-200 w-52 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm"
							onClick={async () => {
								if (!addressRef.current && !companyRef.current) return;
									if (isChange) await updateProfile({
										address: addressRef.current.value,
										company: companyRef.current.value,
									}).then(() => {});
									setChange((prevState) => !prevState);
							}}
						>
							{isChange ? "Сохранить" : "Изменить"}
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="flex justify-center items-center py-6 absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[100vw] h-screen overflow-x-hidden scrollHide drop-shadow-2xl" style={{
			display: showModal ? "flex" : "none"
		}}>
			<div className="relative w-4/12 h-5/12 rounded-xl bg-white shadow-lg flex justify-center p-6 ">
				<div className="relative w-full max-w-md max-h-full">
					<div className="relative bg-white rounded-lg  ">
						<div className="px-6 py-6 lg:px-8">
							<h3 className="mb-4 text-xl font-medium text-gray-900 ">
								Заполните форму для добавления товара
							</h3>
							<form
								className="space-y-6"
								action="#"
								onSubmit={async (event) => {
									event.preventDefault();
									if (
										!nameRef.current ||
										!categoryNameRef.current ||
										!unitsInStockRef.current ||
										!quantityPerUnitRef.current
									)
										return;

									await createProduct({
										product_name: nameRef.current.value,
										category_name: categoryNameRef.current.value,
										units_in_stock: Number(unitsInStockRef.current.value),
										quantity_per_unit: Number(quantityPerUnitRef.current.value),
										units_on_order: 0,
										discontinued: false,
									}).then(() => {
										window.location.reload();
									});
								}}
							>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900">
										Наименование товара
									</label>
									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="Хлеб"
										required
										type="text"
										ref={nameRef}
									/>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900 ">
										Категория товара
									</label>
									<select
										id="categories"
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										ref={categoryNameRef}
									>
										{categories.map((category) => {
											return (
												<option
													value={category.category_name}
													title={category.description}
													key={category.category_name}
												>
													{category.category_name}
												</option>
											);
										})}
									</select>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900 ">
										Количество товара
									</label>
									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="10"
										required
										type="number"
										ref={unitsInStockRef}
									/>
								</div>
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-900 ">
										Количество товара в упаковке
									</label>
									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="5 г/мл/шт"
										required
										type="number"
										ref={quantityPerUnitRef}
									/>
								</div>
								<button
									type="submit"
									className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								>
									Отправить
								</button>
							</form>
						</div>
					</div>
				</div>
				<button
					type={"button"}
					onClick={() => setShowModal(!showModal)}
					className="absolute right-8 top-8 flex justify-between align-center cursor-pointer"
				>
					x{/* <Image src={exitForm} className="w-[14px] h-[14px]" alt="close_form" /> */}
				</button>
			</div>
		</div>
	</>
	);
}
