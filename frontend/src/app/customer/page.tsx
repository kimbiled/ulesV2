"use client";
import Layout from "@components/Layout/Layout";
import Image from "next/image";
import { downarrow, userImg } from "../../../public/assets/index";
import { Fragment, useRef, useState } from "react";
import { useCustomer } from "@root/context/Customer/useCustomer";
import { useUser } from "@context/User/useUser";

import { useEffect } from "react";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";
import { TOrder } from "@context/Volunteer/types";
export default function Customer() {
	const { user, refreshUser } = useUser();
	const { getOrder, getNorm, orderConfirm, updateProfile } = useCustomer();

	const [order, setOrder] = useState<TOrder | null>(null);
	const [isChange, setChange] = useState<boolean>(false);

	const addressRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		Promise.all([getOrder()])
			.then(([retrievedOrders]) => {
				if (retrievedOrders) setOrder(retrievedOrders);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const wantedProducts = [
		{
			id: 1,
			product: "Хлеб",
		},
		{
			id: 2,
			product: "Молоко",
		},
		{
			id: 3,
			product: "Сметана",
		},
		{
			id: 4,
			product: "Яйца",
		},
		{
			id: 5,
			product: "Мясо",
		},
		{
			id: 6,
			product: "Сыр",
		},
		{
			id: 7,
			product: "Хлопья",
		},
		{
			id: 8,
			product: "Курица",
		},
		{
			id: 9,
			product: "Яблоко",
		},
	];
	return (
		<ProtectedRoute>
			<Layout>
				<div className="fontRaleway flex flex-row justify-between w-screen mt-16 mb-16">
					<div className="w-[845px] h-auto bg-gradient-linear rounded-3xl flex flex-row justify-between p-8">
						<div className="h-auto">
							<div className="bg-volunteerColor w-[465px] h-auto py-4 gap-4 rounded-3xl border-[1px] border-white flex flex-wrap items-center justify-evenly">
								<div className="w-full text-center">
									<p className="font-semibold text-xl text-white">Ваш заказ</p>
								</div>
								{order?.order_details.map((item) => (
									<div
										key={item.id}
										className="w-44 h-14 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-2"
									>
										<div className="flex flex-row justify-between">
											<p className="text-[10px]">Название</p>
											<p className="text-[10px]">Количество</p>
										</div>
										<div className="flex flex-row justify-between">
											<p className="text-sm">{item.product.product_name}</p>
											<p className="text-sm">
												{item.quantity} шт
												{/*{item.product.category.unit_of_measurement}*/}
											</p>
										</div>
									</div>
								))}
								<div className="w-full">
									<Image src={downarrow} alt="DownArrow" className="m-auto py-2 cursor-pointer" />
								</div>
							</div>
							<div className="flex w-full justify-end mt-4">
								<button
									className="fontInter hover:bg-stone-200 w-36 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm "
									type={"button"}
									onClick={async () => {
										if (!order) return;

										await orderConfirm(order.id).then(() => {
											window.location.reload();
										});
									}}
								>
									Подтвердить
								</button>
							</div>
						</div>

						<div className="w-64 h-[450px] bg-volunteerColor rounded-3xl border-[1px] border-white">
							<div className="flex flex-col items-center gap-3 mt-4">
								<div className="w-52 h-44 rounded-2xl bg-white flex justify-center items-center">
									<Image src={userImg} alt="userImg" className="m-auto py-2 cursor-pointer" />
								</div>
								<Fragment key={order?.volunteer.user}>
									<div className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
										<p className="text-[10px]">Волонтер</p>
										<p className="text-sm">{order?.volunteer.name}</p>
									</div>
									<div className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
										<p className="text-[10px]">Дата создания</p>
										<p className="text-sm">{order?.order_date}</p>
									</div>
									<div className="w-52 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
										<p className="text-[10px]">Поставщик</p>
										{order?.order_details.length > 0 && (
											<p className="text-sm" key={order.order_details[0].id}>
												{order.order_details[0].product.shop.company}
											</p>
										)}
									</div>
									<div className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
										<p className="text-[10px]">Адрес доставки</p>
										<p className="text-sm">{order?.customer.address}</p>
									</div>
								</Fragment>
							</div>
						</div>
					</div>

					<div className="w-[336px] h-auto bg-gradient-linear rounded-3xl text-white p-4">
						<div className="flex flex-col gap-5 justify-center w-[280px] m-auto">
							<div className="flex flex-row  justify-start gap-4 items-center">
								<div className="w-[72px] h-[72px] rounded-full bg-gray-400"></div>
								<div>
									<p className="text-lg">{user?.name}</p>
									<p className="text-xs">Данные вашего аккаунта</p>
								</div>
							</div>
							<div className="w-auto h-auto rounded-xl border-[1px] border-white p-4">
								<p className="text-xs">Список желаемых продуктов</p>
								<div className="">
									<ul className="flex flex-wrap text-sm font-medium list-disc list-inside items-center gap-1">
										{wantedProducts.map((item) => (
											<Fragment key={item.id}>
												<li className="w-20">{item.product}</li>
												<div className="w-7 h-2.5 border-white border-[1px] rounded-3xl bg-organisationInput flex justify-center items-center">
													<p className="font-semibold text-[8px]">0.1 кг</p>
												</div>
											</Fragment>
										))}
									</ul>
								</div>
							</div>
							<div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
								<p className="text-[10px]">Ваше имя</p>
								<p className="text-sm">{user?.name}</p>
							</div>
							{/*<div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">*/}
							{/*	<p className="text-[10px]">Возраст</p>*/}
							{/*	<p className="text-sm">56 лет</p>*/}
							{/*</div>*/}
							<div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
								<p className="text-[10px]">Ваш адрес</p>
								<input
									type="text"
									className="bg-transparent outline-none text-sm"
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

										if (isChange)
											await updateProfile(addressRef.current.value).then(() => {
												refreshUser();
											});

										setChange((prevState) => !prevState);
									}}
								>
									{isChange ? "Сохранить" : "Изменить"}
								</button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</ProtectedRoute>
	);
}
