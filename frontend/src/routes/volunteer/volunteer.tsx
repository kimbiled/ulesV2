"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { format } from 'date-fns';
import { useVolunteer } from "@context/Volunteer/useVolunteer";

import OrderModal from "./OrderModal";

import type { TAvailableOrder, TOrder, TTop } from "@context/Volunteer/types";
import type { TUser } from "@hooks/user/types";

import { downarrow, profileImg } from "@public/assets";

export default function Volunteer({ user }: { user: TUser | null }) {
	const { getOrders, getAvailableOrders, getTop, updateProfile, assignOrder, denyOrder } = useVolunteer();

	const [orderModalOpen, setOrderModalOpen] = useState(false);
	const [isChange, setChange] = useState<boolean>(false);

	const [availableOrders, setAvailableOrders] = useState<TAvailableOrder[]>([]);
	const [orders, setOrders] = useState<TOrder[]>([]);
	const [ratings, setRatings] = useState<TTop | null>(null);

	const [currentOrder, setCurrentOrder] = useState<TOrder>({} as TOrder);

	const companyRef = useRef<HTMLInputElement>(null);
	
	console.log(user);
	useEffect(() => {
		Promise.all([getAvailableOrders(), getOrders(), getTop()])
			.then(([retrievedAvailableOrders, retrievedOrders, retrievedRating]) => {
				if (retrievedAvailableOrders) setAvailableOrders(retrievedAvailableOrders);
				if (retrievedOrders) setOrders(retrievedOrders);
				if (retrievedRating) setRatings(retrievedRating);
			})
			.catch((error) => {
				console.log(error);
			});

		return () => {
			setAvailableOrders([]);
			setOrders([]);
			setRatings(null);
		};
	}, []);
	return (
		<>
			<div className="fontRaleway flex flex-row justify-around w-screen mt-16 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-row max-xl:gap-3 max-xl:items-center ">
				<div className="max-sm:w-full w-2/5 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
					<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full  h-[75px]">
						Заказы
					</h4>
					<hr />
					
					<h5 className="font-semibold text-[21px] text-white p-1 w-full">
						Ваши заказы:
					</h5>
					{orders.map((order) => {
						return (
							<div
								key={order.id}
								className="w-full h-18 rounded-xl border-[1px] border-white flex justify-between  text-white p-2"
							>
								<div className="flex flex-col gap-1 rounded-xl border-[1px] border-white p-2 w-1/4 te">
									<p className="text-[10px]">Имя получателя:</p>
									<p className="text-sm">{order.customer.name}</p>
								</div>
								<div className="flex flex-col gap-1 rounded-xl border-[1px] border-white p-2 w-1/4	">
									<p className="text-[10px]">Адрес получателя:</p>
									<p className="text-sm">{order.customer.address}</p>
								</div>
								<div className="flex flex-col gap-1 rounded-xl border-[1px] border-white p-2 w-1/6	">
									<p className="text-[10px]">Дата заказа:</p>
									<p className="text-sm">{format(new Date(order.order_date), 'dd.MM.yy')}</p>
								</div>
								<div className="mr-2 w-1/4 flex items-center">
									<button
										className="fontInter w-36 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
										onClick={() => {
											setCurrentOrder(order);
											setOrderModalOpen((prevState) => !prevState);
										}}
									>
										Подробнее
									</button>
								</div>
							</div>
						);
					})}
					<h5 className="font-semibold text-[21px] text-white p-1 w-full mt-4">
						Доступные заказы:
					</h5>
					{/* other orders that are available for Volunteer */}
					{availableOrders.map((availableOrder) => {
						return (
							<div
								key={availableOrder.id}
								className="w-full h-18 rounded-xl border-[1px] border-white flex justify-between  text-white p-2"
							>
								<div className="flex flex-col gap-1 rounded-xl border-[1px] border-white p-2 w-1/4">
									<p className="text-[10px]">Имя получателя:</p>
									<p className="text-sm">{availableOrder.customer.name}</p>
								</div>
								<div className="flex flex-col gap-1 rounded-xl border-[1px] border-white p-2 w-1/4	">
									<p className="text-[10px]">Адрес получателя:</p>
									<p className="text-sm">{availableOrder.customer.address}</p>
								</div>
								<div className="flex flex-col gap-1 rounded-xl border-[1px] border-white p-2 w-1/6">
									<p className="text-[10px]">Дата заказа:</p>
									<p className="text-sm">{format(new Date(availableOrder.order_date), 'dd.MM.yy')}</p>
								</div>
								<div className="mr-2 flex flex-col gap-2 w-1/4">
									<button
										className="fontInter w-36 h-6 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
										onClick={() => {
											setCurrentOrder(availableOrder);
											setOrderModalOpen((prevState) => !prevState);
										}}
									>
										Подробнее
									</button>
									<button
										className="fontInter w-36 h-6 mr-2 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
										type={"button"}
										onClick={async () => {
											await assignOrder(availableOrder.id).then(() => {
												window.location.reload();
											});
										}}
									>
										Выбрать
									</button>
								</div>
							</div>
						);
					})}
				</div>
				<div className="max-sm:w-full w-1/4 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
					<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full h-[75px]">
						Рейтинг
					</h4>
					<hr />
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
							ratings?.data.map((top) => {
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
				<div className="max-sm:w-full w-1/4 h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col  text-white">
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
								defaultValue={user?.company}
								ref={companyRef}
							/>
						</div>
						<div className="flex w-full justify-center ">
							<button
								className="fontInter hover:bg-stone-200 w-52 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm"
								onClick={async () => {
									if (!companyRef.current) return;
										if (isChange) await updateProfile({
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
			<OrderModal
				isVisible={orderModalOpen}
				setIsVisible={setOrderModalOpen}
				order={currentOrder}
				denyOrder={denyOrder}
			/>
		</>
	);
}
