"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { exitForm } from "@public/assets";

import { TCategory, TProduct } from "@context/Shop/types";
import { useShop } from "@context/Shop/useShop";
import type { TUser } from "@hooks/user/types";

export default function Profile({ user }: { user: TUser | null }) {
	const { getProducts, createProduct, getCategories } = useShop();

	const [showModal, setShowModal] = useState(false);
	const [products, setProducts] = useState<TProduct[]>([]);
	const [categories, setCategories] = useState<TCategory[]>([]);

	const nameRef = useRef<HTMLInputElement>(null);
	const categoryRef = useRef<HTMLSelectElement>(null);
	const unitsInStockRef = useRef<HTMLInputElement>(null);
	const quantityPerUnitRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		Promise.all([getProducts(), getCategories()])
			.then(([retrievedProducts, retrievedCategories]) => {
				if (retrievedProducts) setProducts(retrievedProducts);
				if (retrievedCategories) setCategories(retrievedCategories);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return showModal ? (
		<div className="flex justify-center items-center py-6 absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-screen h-screen scrollHide drop-shadow-2xl">
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
								onSubmit={async () => {
									if (
										!nameRef.current ||
										!categoryRef.current ||
										!unitsInStockRef.current ||
										!quantityPerUnitRef.current
									)
										return;

									await createProduct({
										product_name: nameRef.current.value,
										category_name: categoryRef.current.value,
										units_in_stock: Number(unitsInStockRef.current.value),
										quantity_per_unit: Number(quantityPerUnitRef.current.value),
										units_on_order: 0,
										discontinued: false,
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
										ref={categoryRef}
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
										Количество упаковок
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
										Количество товара в упаковке &lang;мл, г, шт&#41;
									</label>
									<input
										className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										placeholder="5"
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
					<Image src={exitForm} className="w-[14px] h-[14px]" alt="close_form" />
				</button>
			</div>
		</div>
	) : (
		<div className="bg-[#F7F7FB] w-[calc(100vw-280px)] p-9 h-[calc(100vh-80px)]">
			<div className="bg-white p-4 rounded-lg shadow-md">
				<h2 className="text-xl font-bold mb-2">Адрес</h2>
				<p className="mb-4">{user && user.address}</p>

				<h2 className="text-xl font-bold mb-2">Компания</h2>
				<p className="mb-4">{user && user.company}</p>

				<h2 className="text-xl font-bold mb-2">Рейтинг</h2>
				<div className="flex items-center">
					<svg className="w-6 h-6 fill-current text-yellow-500 mr-2" viewBox="0 0 20 20">
						<path d="M10 1l2.356 6.824h7.616l-5.832 4.25 2.28 6.942-5.824-4.214-5.824 4.214 2.28-6.942-5.832-4.25h7.616z"></path>
					</svg>
					<p className="font-bold">{(user && user.rating) || "-"} поинты</p>
				</div>

				<button
					className="w-[160px] h-[50px] mt-5 rounded-xl text-white font-bold font-lg bg-ulsDark"
					onClick={() => setShowModal(true)}
				>
					Добавить продукт
				</button>
			</div>

			<div className="relative overflow-x-auto mt-10">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase ">
						<tr>
							<th scope="col" className="px-6 py-3">
								Название продукта
							</th>
							<th scope="col" className="px-6 py-3">
								Количество
							</th>
							<th scope="col" className="px-6 py-3">
								Количество на единицу
							</th>
							<th scope="col" className="px-6 py-3">
								Категория
							</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => {
							return (
								<tr key={product.id} className={"bg-white border-b"}>
									<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
										{product.product_name}
									</td>
									<td className="px-6 py-4">{product.units_in_stock}</td>
									<td className="px-6 py-4">{product.quantity_per_unit}</td>
									<td className="px-6 py-4">{product.category_name}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
