"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Modal from './Modal'
import { useRouter } from "next/navigation";
import { Raleway, Inter } from "next/font/google";
const rlw = Raleway({ subsets: ["latin"] });
const int = Inter({ subsets: ["latin"] });

import { useUser } from "@context/User/useUser";
import { useVolunteer } from "@context/Volunteer/useVolunteer";
import { TOrder } from "@context/Volunteer/types";

import { downarrow, profileImg } from "@public/assets";

import Layout from "@components/Layout/Layout";

export default function Volunteer() {
	const { getOrders } = useVolunteer();
	const { user } = useUser();
	const { push } = useRouter();

	const [modalOpen, setModalOpen] = useState(false);
	const handleOnClose = () => setModalOpen(false)

	// const [orders, setOrders] = useState<TOrder[]>([]);

	// useEffect(() => {
	// 	// Data fetching
	// 	Promise.all([getOrders()]).then(([fetchedOrders]) => {
	// 		if (!fetchedOrders) return;
	// 		setOrders(fetchedOrders);
	// 	});

	// 	return () => {
	// 		setOrders([]);
	// 	};
	// }, []);

	useEffect(() => {
		if (!user) return push("/login");
	}, [user]);

	const ratings = [
		{
			id: 1,
			place: 34,
			fullName: "Ертаев Уалихан",
			rating: 12,
		},
		{
			id: 2,
			place: 1,
			fullName: "Ертаев Уалихан",
			rating: 15,
		},
		{
			id: 3,
			place: 5,
			fullName: "Ертаев Уалихан",
			rating: 11,
		},
		{
			id: 4,
			place: 74,
			fullName: "Ертаев Уалихан",
			rating: 1,
		},
		{
			id: 5,
			place: 15,
			fullName: "Ертаев Уалихан",
			rating: 9,
		},
	];

	const orders = [
		{
			id: 1,
			fromAddress: "Тауелсиздик 2/5",
			toAddress: "Республика 12",
			pickDate: "21.07.2023",
			deliverDate: "22.07.2023",
			value: "3кг",
		},
		{
			id: 2,
			fromAddress: "Тауелсиздик 2/4",
			toAddress: "Республика 5",
			pickDate: "21.07.2023",
			deliverDate: "22.07.2023",
			value: "3кг",
		},
		{
			id: 3,
			fromAddress: "Тауелсиздик 2/1",
			toAddress: "Республика 1",
			pickDate: "21.07.2023",
			deliverDate: "22.07.2023",
			value: "3кг",
		},
		{
			id: 4,
			fromAddress: "Тауелсиздик 2/5",
			toAddress: "Республика 12",
			pickDate: "21.07.2023",
			deliverDate: "22.07.2023",
			value: "3кг",
		},
		{
			id: 5,
			fromAddress: "Тауелсиздик 2/5",
			toAddress: "Республика 22",
			pickDate: "21.07.2023",
			deliverDate: "22.07.2023",
			value: "3кг",
		},
		{
			id: 6,
			fromAddress: "Тауелсиздик 2/5",
			toAddress: "Республика 12",
			pickDate: "21.07.2023",
			deliverDate: "22.07.2023",
			value: "3кг",
		},
	];

	return (
		<Layout>
					<div className="w-full h-full flex flex-row justify-between mb-16 mt-16 fontRaleway" >
						<div className="flex flex-col justify-between">
							<div className="w-[445px] h-[530px] bg-gradient-linear2 rounded-3xl text-white flex flex-col">
								<div className="flex flex-row justify-start gap-4 items-center w-[365px] m-auto">
									<div className="w-[72px] h-[72px] rounded-full bg-gray-400"></div>
									<div>
										<p className="text-lg">Ертаев Уалихан</p>
										<p className="text-xs">Данные вашего аккаунта</p>
									</div>
								</div>
								<hr />
								<div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
									<p>Ваше ФИО</p>
									<input placeholder="Ертаев Уалихан" type="text" className="fontInter focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 bg-organisationInput"/>
								</div>
		
								<div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
									<p>Ваш возраст</p>
									<input placeholder="17 лет" type="text" className="fontInter focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 bg-organisationInput"/>
								</div>
								<div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
									<p>Ваш номер</p>
									<input placeholder="+7 707 777 77 77" type="tel" className="fontInter focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 bg-organisationInput"/>
								</div>
								<div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
									<p>Ваша организация</p>
									<input placeholder="Жастар Рухы" type="text" className="fontInter focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 bg-organisationInput"/>
								</div>
								<hr />
								<div className="flex justify-center items-center p-2 fontInter">
									<button className="fontInter hover:bg-stone-200 w-36 h-10 bg-white text-black rounded-3xl mb-1 mt-1 text-sm ">Подтвердить</button>
								</div>
							</div>
		
							<div className="w-[445px] h-[475px] bg-gradient-linear2 rounded-3xl">
								<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">
									Рейтинг
								</h4>
								<div className="m-auto mt-4 flex flex-col gap-3">
									{ratings.map((item) => (
										<div
											key={item.id}
											className="border-white border-[1px] w-[390px] h-14 bg-volunteerColor hover:bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto "
										>
											<div className="flex flex-col">
												<p className="text-xs">{item.place} место</p>
												<p>{item.fullName}</p>
											</div>
											<div>
												<p className="font-medium text-xl">{item.rating}</p>
											</div>
										</div>
									))}
								</div>
								<hr className="mt-4" />
								<Image src={downarrow} alt="DownArrow" className="m-auto py-2 cursor-pointer" />
							</div>
						</div>
		
						<div className="w-[740px] h-[1050px] bg-gradient-linear2 rounded-3xl">
							<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">
								Заказы
							</h4>
							{orders.map((item) => (
								<div className="flex flex-row justify-around items-center"> 
									<div className="m-auto w-16 h-16"> 
										<Image src={profileImg} alt="volunteericon" />
									</div>
		
									<div
									key={item.id}
									className="relative flex flex-row justify-between w-[585px] h-28 bg-volunteerColor rounded-xl border-[1px] border-white m-auto mt-4 items-center"
								>
									<div className="text-white font-medium flex flex-row items-center">
										<div className="w-[135px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
											<p className="text-xs">Адрес:</p>
											<p className="text-sm">{item.toAddress} -</p>
											<p className="text-sm italic underline cursor-pointer" onClick={()=>setModalOpen(true)}>Подробнее</p>
										</div>
										<div className="w-[100px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
											<p className="text-xs">Дата:</p>
											{/*<p className="text-sm">{item.pickDate} -</p>*/}
											{/*<p className="text-sm">{item.deliverDate}</p>*/}
										</div>
										<div className="w-[121px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col  p-2">
											<p className="text-xs">Вес:</p>
											{/*<p className="text-sm">{item.value}</p>*/}
										</div>
									</div>
		
									<div className="mr-2">
										<button className="fontInter w-36 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200">
											Подтвердить
										</button>
									</div>
								</div>
								</div>
							))}
							<hr className="mt-6" />
							<Image src={downarrow} alt="DownArrow" className="m-auto py-2 cursor-pointer" />
						</div>
					</div>
				<Modal onClose={handleOnClose} visible={modalOpen} />
		</Layout>
	);
}
