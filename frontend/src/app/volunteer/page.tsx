"use client";
import { useMemo, useState } from "react";

import "./styles/index.scss";

import Layout from "@components/Layout/Layout";
import Cart from "@components/Card/Card";

import { IVolunteerRating } from "@root/types/Volunteer";

export default function Volunteer() {
	const [volRating, setVolRating] = useState<IVolunteerRating[]>([]);

	useMemo(() => {
		// Data fetching

		return () => {
			setVolRating([]);
		};
	}, []);

	return (
		<Layout>
			<div className={"flex flex-col gap-[30px] my-[30px] justify-center w-[100%]"}>
				<div className={"flex flex-row gap-[30px]"}>
					<Cart />
					<Cart />
				</div>

				<div
					className={"bg-[#0D2435] rounded-[2rem] px-[1.5rem] py-[2rem] h-fit text-white flex flex-col gap-6"}
				>
					<div className={"flex justify-between items-center w-[100%]"}>
						<p className={"font-semibold text-[24px]"}>Рейтинг волонтеров</p>
						<p className={"text-[#0D89AF] cursor-pointer"}>Просмотреть все</p>
					</div>
					<div className={"flex flex-col gap-[0px]"}>
						<div className={"flex flex-row"}>
							<img src="" alt="" width={48} height={48} />
							<div className={"flex flex-col gap-[5px]"}>
								<p className={"font-semibold text-[24px]"}>Вы (123 место)</p>
								<p className={"text-gray-400"}>men@kazakh.kz</p>
							</div>
							<p className={"font-semibold text-[24px] ml-auto items-center"}>10 поездок</p>
						</div>

						<div className={"flex flex-row podium first"}>
							<img src="" alt="" width={48} height={48} />
							<div className={"flex flex-col gap-[5px]"}>
								<p className={"font-semibold text-[24px]"}>Вы (123 место)</p>
								<p className={"text-gray-400"}>men@kazakh.kz</p>
							</div>
							<p className={"font-semibold text-[24px] ml-auto items-center"}>10 поездок</p>
						</div>

						<div className={"flex flex-row podium second"}>
							<img src="" alt="" width={48} height={48} />
							<div className={"flex flex-col gap-[5px]"}>
								<p className={"font-semibold text-[24px]"}>Вы (123 место)</p>
								<p className={"text-gray-400"}>men@kazakh.kz</p>
							</div>
							<p className={"font-semibold text-[24px] ml-auto items-center"}>10 поездок</p>
						</div>

						<div className={"flex flex-row podium third"}>
							<img src="" alt="" width={48} height={48} />
							<div className={"flex flex-col gap-[5px]"}>
								<p className={"font-semibold text-[24px]"}>Вы (123 место)</p>
								<p className={"text-gray-400"}>men@kazakh.kz</p>
							</div>
							<p className={"font-semibold text-[24px] ml-auto items-center"}>10 поездок</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
