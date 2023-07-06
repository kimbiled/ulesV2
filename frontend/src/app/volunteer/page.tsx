import Layout from "@components/Layout/Layout";

export default function Volunteer() {
	return (
		<Layout>
			<div className={"bg-[#0D2435] rounded-[2rem] px-[1.5rem] py-[2rem] h-fit text-white flex flex-col gap-6"}>
				<div className={"flex justify-between items-center min-w-[550px]"}>
					<p className={"font-semibold text-[24px]"}>Доставленные корзины</p>
					<p className={"text-[#0D89AF]"}>Просмотреть все</p>
				</div>
				<table className={"table-auto w-[100%] text-left"}>
					<thead
						className={
							"relative before:absolute before:w-[100%] before:h-[100%] before:bg-[#C0C0C0] before:rounded-t-[15px] before:border-b-white before:border-b-[3px]"
						}
					>
						<tr className={"z-1 relative text-[#0D2435] text-[18px]"}>
							<th className={"w-3/4 p-3.5"}>Заказы</th>
							<th>Даты</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className={"text-[17px] font-medium p-3"}>Заказ достален для Линель Месси</td>
							<td className={"text-[#8D8D8D] text-[14px]"}>Июн 18, 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
		</Layout>
	);
}
