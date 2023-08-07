import Image from "next/image";
import { exitForm } from "@public/assets";
import { Dispatch, SetStateAction } from "react";
import { TOrder } from "@context/Volunteer/types";

interface OrderProps {
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
	order: TOrder;
	denyOrder: (id: number) => Promise<void>;
}

const Order = ({ isVisible, setIsVisible, order, denyOrder }: OrderProps) => {
	return (
		order.order_details && (
			<div
				className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-y"
				style={{ display: isVisible ? "flex" : "none" }}
			>
				<div className="relative fontRaleway bg-gradient-linear2 w-[445px] h-[680px] text-white rounded-2xl overflow-scroll overflow-x-hidden cursor-pointer">
					<Image
						src={exitForm}
						alt="Close"
						onClick={() => {
							setIsVisible((prevState) => !prevState);
						}}
						className="absolute right-10 top-8"
					/>
					<div className="w-[370px] m-auto mt-4 mb-3">
						<h4 className="font-semibold text-[28px]">Ваш заказ</h4>
					</div>
					<hr />
					<div className="h-auto w-[370px] font-medium flex flex-col justify-center m-auto gap-3 mt-3">
						<div className="flex flex-col gap-2 relative">
							<div className="flex flex-col gap-[10px] py-2 px-4 justify-between rounded-xl border-[1px] border-white bg-organisationInput">
								<div className="flex flex-row justify-between">
									<p>Магазин</p>
									<p>Адрес</p>
								</div>
								{order.order_details.map((orderDetail) => {
									return (
										<div className="flex flex-row justify-between text-sm" key={orderDetail.id}>
											<p>{orderDetail.product.shop.company}</p>
											<p>{orderDetail.product.shop.address}</p>
										</div>
									);
								})}
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<p>Адрес получения</p>
							<div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">
								<div className="flex flex-col justify-center p-4 text-sm">
									<p>{order.customer.address}</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<p>ФИО получателя</p>
							<div className="flex flex-row justify-between h-11 rounded-xl text-sm border-[1px] border-white bg-organisationInput">
								<div className="flex flex-col justify-center p-4">
									<p>{order.customer.name}</p>
								</div>
							</div>
						</div>

						{/*<div className="flex flex-col gap-2">*/}
						{/*	<p>Дата доставки</p>*/}
						{/*	<div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">*/}
						{/*		<div className="flex flex-col justify-center p-4">*/}
						{/*			<p className="text-[10px]">Доставка</p>*/}
						{/*			<p className="text-xs">16 Июля - 17 Июля</p>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}

						<div className="flex flex-col gap-2 relative">
							<p>Продукты и количество товаров</p>
							<div className="flex flex-row justify-between rounded-xl border-[1px] border-white bg-organisationInput">
								<div className="flex flex-col justify-center p-4 text-sm w-full">
									{order.order_details.map((orderDetail) => {
										return (
											<div className="flex flex-row justify-between" key={orderDetail.id}>
												<p>{orderDetail.product.product_name}</p>
												<p>{orderDetail.quantity}</p>
											</div>
										);
									})}
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<p>Ules Поинты</p>
							<div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">
								<div className="flex flex-col justify-center p-4 text-sm">
									<p>
										{order.order_details.length}{" "}
										{order.order_details.length === 1
											? "пойнт"
											: order.order_details.length < 4
											? "пойнта"
											: "пойнтов"}
									</p>
								</div>
							</div>
						</div>

						<div className="flex flex-row justify-between mt-4">
							<button
								className="fontInter w-44 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
								type={"button"}
							>
								Звонок магазину
							</button>

							<button
								className="fontInter w-44 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
								type={"button"}
							>
								Звонок клиенту
							</button>
						</div>
					</div>
					<hr className="mt-5" />
					<div className="flex justify-center h-20  items-center">
						<button
							className="fontInter w-52 h-10 bg-ulsDark text-white rounded-3xl"
							type={"button"}
							onClick={async () => {
								await denyOrder(order.id).then(() => {
									window.location.reload();
								});
							}}
						>
							Отказаться от заказа
						</button>
					</div>
				</div>
			</div>
		)
	);
};
export default Order;
