"use client";
import { useMemo, useState } from "react";
import Image from 'next/image';

import { downarrow } from "@public/assets";
import Layout from "@components/Layout/Layout";
import { IVolunteerRating } from "@root/types/Volunteer";

export default function Volunteer() {
	const [volRating, setVolRating] = useState<IVolunteerRating[]>([]);

	useMemo(() => {
		// Data fetching

		return () => {
			setVolRating([]);
		};
	}, []);

	const ratings = [
		{
			id:1,
			place: 34,
			fullName: 'Ертаев Уалихан',
			rating: 12
		},
		{
			id:2,
			place: 1,
			fullName: 'Ертаев Уалихан',
			rating: 15
		},
		{
			id:3,
			place: 5,
			fullName: 'Ертаев Уалихан',
			rating: 11
		},
		{
			id:4,
			place: 74,
			fullName: 'Ертаев Уалихан',
			rating: 1
		},
		{
			id:5,
			place: 15,
			fullName: 'Ертаев Уалихан',
			rating: 9
		},

	]

	const orders = [
		{
			id:1,
			fromAddress:"Тауелсиздик 2/5",
			toAddress:"Республика 12",
			pickDate:"21.07.2023",
			deliverDate:"22.07.2023",
			value: "3кг"
		},
		{
			id:2,
			fromAddress:"Тауелсиздик 2/4",
			toAddress:"Республика 5",
			pickDate:"21.07.2023",
			deliverDate:"22.07.2023",
			value: "3кг"
		},
		{
			id:3,
			fromAddress:"Тауелсиздик 2/1",
			toAddress:"Республика 1",
			pickDate:"21.07.2023",
			deliverDate:"22.07.2023",
			value: "3кг"
		},
		{
			id:4,
			fromAddress:"Тауелсиздик 2/5",
			toAddress:"Республика 12",
			pickDate:"21.07.2023",
			deliverDate:"22.07.2023",
			value: "3кг"
		},
		{
			id:5,
			fromAddress:"Тауелсиздик 2/5",
			toAddress:"Республика 22",
			pickDate:"21.07.2023",
			deliverDate:"22.07.2023",
			value: "3кг"
		},
		{
			id:6,
			fromAddress:"Тауелсиздик 2/5",
			toAddress:"Республика 12",
			pickDate:"21.07.2023",
			deliverDate:"22.07.2023",
			value: "3кг"
		},
	]

	return (
		<Layout>
			<div className="w-full h-full flex flex-row justify-between mb-16 mt-16">
				<div className="flex flex-col justify-between">

					<div className="w-[445px] h-[475px] bg-gradient-linear2 rounded-3xl">
						<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">Рейтинг</h4>
						<div className="m-auto mt-4 flex flex-col gap-3">
						{ratings.map(item=>(
							<div key={item.id} className="border-white border-[1px] w-[390px] h-14 bg-volunteerColor hover:bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto ">
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
						<hr className="mt-4"/>
						<Image src={downarrow} alt="DownArrow" className="m-auto py-2 cursor-pointer"/>
					</div>


					<div className="w-[445px] h-[385px] bg-gradient-linear2 rounded-3xl">
						<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">Организация</h4>
							<div className="m-auto mt-4 w-[365px] flex flex-col gap-3 text-white">
								<div className="flex flex-col gap-2">
									<p>Название оргиназации</p>
									<input placeholder="Организация" 
										   type="text" 
										   className="w-[365px] h-9 rounded-3xl bg-organisationInput border-[1px] border-white p-4 focus:outline-none" />
									<p className="text-[10px]">Введите название организации в которой вы состоите</p>
								</div>
								<div className="flex flex-col gap-2">
									<p>Название оргиназации</p>
									<input placeholder="Организация" 
										   type="text" 
										   className="w-[365px] h-9 rounded-3xl bg-organisationInput border-[1px] border-white p-4 focus:outline-none" />
									<p className="text-[10px]">Введите название организации в которой вы состоите</p>
								</div>
								<button className="hover:bg-stone-200 w-36 h-8 bg-white m-auto text-black rounded-3xl mb-1 mt-1 text-sm">Подтвердить</button>
							</div>
						<hr className="mt-4"/>
					</div>
				</div>

				<div className="w-[740px] h-[900px] bg-gradient-linear2 rounded-3xl">
					<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">Заказы</h4>
						{orders.map(item=>(
						<div key={item.id} className="flex flex-row justify-between w-[655px] h-28 bg-volunteerColor rounded-xl border-[1px] border-white m-auto mt-4 items-center">
							<div className="text-white font-medium flex flex-row items-center">
								<div className="w-[135px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
									<p className="text-xs">Адрес:</p>
									<p className="text-sm">{item.fromAddress} -</p>
									<p className="text-sm">{item.toAddress}</p>
								</div>
								<div className="w-[100px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
									<p className="text-xs">Дата:</p>
									<p className="text-sm">{item.pickDate} -</p>
									<p className="text-sm">{item.deliverDate}</p>
								</div>
								<div className="w-[121px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col  p-2">  
									<p className="text-xs">Вес:</p>
									<p className="text-sm">{item.value}</p>
								</div>
							</div>

							<div className="mr-2">
								<button className="w-36 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200">Подтвердить</button>
							</div>
						</div>
						))}
						<hr className="mt-6"/>
						<Image src={downarrow} alt="DownArrow" className="m-auto py-2 cursor-pointer"/>
				</div>
			</div>

		</Layout>
	);
}