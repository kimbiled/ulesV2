import { magnum, template, quote} from '../../app/assets/index';
import Image from 'next/image';
import Layout from "../Layout/Layout";

export default function Community() {
	return(
        <div className="flex flex-col gap-4">
            <h3 className="text-center font-bold text-5xl">Что наши клиенты говорят о нас </h3>
            <div className="flex flex-row mb-24 justify-center gap-16 mt-12">
                <div className="flex flex-col gap-20">
                    <div className="w-[445px] rounded-3xl h-[230px] relative">
                        <Image src={magnum} alt="magnumLogo" className='positionImage'/>
                        <Image src={template} width={445} height={267} className="rounded-3xl" alt="magnumLogo " />
                    </div>
                    <div className='w-[400px] m-auto relative flex flex-col gap-3'>
                        <Image src={quote} alt="quote"/>
                        <p className='font-medium text-xl text-center ml-6'>Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль...</p>
                    </div>
                </div>

                <div className="flex flex-col gap-20">
                    <div className="w-[445px] rounded-3xl h-[230px] relative">
                        <Image src={magnum} alt="magnumLogo" className='positionImage'/>
                        <Image src={template} width={445} height={267} className="rounded-3xl" alt="magnumLogo " />
                    </div>
                    <div className='w-[400px] m-auto relative flex flex-col gap-3'>
                        <Image src={quote} alt="quote"/>
                        <p className='font-medium text-xl text-center ml-6'>Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто хотел бы иметь её просто потому, что это боль...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
