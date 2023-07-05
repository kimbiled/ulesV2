import Layout from "@components/Layout/Layout";
import { bin, time, map, timer} from '../../app/assets/index';
import Image from 'next/image';

export default function Customer() {
	return (
		<Layout>
            <div className="flex flex-row gap-8 mt-12">
                <div className="w-[680px] font-medium text-[33px] flex items-center">
                    <p>Здравствуйте, Андрей! Магазин Magnum предоставит вам товары. Пожалуйста, <mark>подтвердите</mark> возможность получения</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Image src={time} alt="time" />
                    <div className="border-l-2 border-black h-48 border-dashed border-[#5C97CD]"></div>
                    <Image src={map} alt="time" />
                    <div className="border-l-2 border-black h-48 border-dashed border-[#5C97CD]"></div>
                    <Image src={bin} alt="time" />
                </div>

                <div className="flex flex-col justify-center ml-6">
                    <div className="flex flex-col ">
                        <p>Товары подготовлены</p>
                        <div className="flex flex-row gap-2">
                            <Image src={timer} alt="timer" />
                            <p>8:40, Май 2023</p>
                        </div>
                    </div>
                    <div className="border-l-2 h-52 border-white"></div>
                    <div className="flex flex-col">
                        <p>В дороге</p>
                        <div className="flex flex-row gap-2">
                            <Image src={timer} alt="timer" />
                            <p>8:40, Май 2023</p>
                        </div>
                        <button className="w-44 h-9 rounded-3xl text-white bg-[#0D163A]">Следить</button>
                    </div>
                    <div className="border-l-2 h-44 border-white"></div>
                    <div className="flex flex-col">
                        <p>Доставлено</p>
                        <div className="flex flex-row gap-2">
                            <Image src={timer} alt="timer" />
                            <p>8:40, Май 2023</p>
                        </div>
                    </div>

                    <button className="w-[400px] h-16 rounded-[40px] text-white bg-[#0D163A] mt-12 font-medium text-[27px]">Подтвердить</button>
                </div>
            </div>
        </Layout>
	);
}