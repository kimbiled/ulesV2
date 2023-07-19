import { Dispatch, SetStateAction } from "react";

interface MoreProps {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
}

const More = ({ visible, setVisible }: MoreProps) => {
	if (!visible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
			<div className="fontRaleway bg-gradient-linear2 w-[445px] h-[295px] text-white rounded-2xl p-4">
				<div className="m-auto w-[365px] flex flex-col justify-center gap-3">
					<p className="font-bold text-2xl">Адреса для волонтера</p>
					<div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
						<p>Адрес магазина</p>
						<div className="fontInter text-xs focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 bg-organisationInput">
							<p>Туркестан 8/1</p>
						</div>
					</div>
					<div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
						<p>Адрес получателя</p>
						<div className="fontInter text-xs focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 bg-organisationInput">
							<p>Сыганак 8/1</p>
						</div>
					</div>
					<div className="flex justify-center">
						<button
							onClick={() => {
								setVisible(false);
							}}
							className="fontInter hover:bg-stone-200 w-36 h-10 bg-white text-black rounded-3xl mb-1 mt-1 text-sm "
						>
							Закрыть окно
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default More;
