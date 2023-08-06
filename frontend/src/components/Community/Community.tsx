import Image from 'next/image';
import Layout from '../Layout/Layout';
import { magnum, quote, quote01, quote02 } from '@public/assets';

export default function Community() {
  return (
    <div className="fontRaleway flex flex-col gap-4 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <h3 className="text-center font-bold  text-3xl   md:text-4xl text-ulsDark">
        Что наши клиенты говорят о нас{' '}
      </h3>
      <div className="flex flex-col md:flex-row mb-24 justify-center items-center gap-16 mt-12">
        <div className="  flex flex-col justify-center items-center gap-10 md:gap-20">
          <div className=" rounded-3xl  relative">
            <Image
              src={magnum}
              alt="magnumLogo"
              className="absolute   left-[135px] md:left-[200px] rounded-full border-4 border-white object-cover overflow-hidden"
              width={50}
              height={50}
            />{' '}
            <Image
              src={quote01}
              className="rounded-3xl  w-[322px] h-[233px] md:w-[445px] md:h-[267px]"
              alt="magnumLogo "
            />
          </div>
          <div className="md:w-[400px] m-auto relative flex flex-col gap-3">
            <Image src={quote} alt="quote" />
            <p className="w-[300px] md:w-full font-light text-sm md:text-lg text-center ">
              Прежде всего меня удивила работоспобность алгоритма, где по
              сравнению с другими платформами, эффективность потребления товаров
              возросла неимоверно. Автоматизация Úles просто на высочайшем
              уровне!
            </p>
          </div>
        </div>
        <div className="  flex flex-col justify-center items-center gap-10 md:gap-20">
          <div className=" rounded-3xl  relative">
            <Image
              src={magnum}
              alt="magnumLogo"
              className="absolute   left-[135px] md:left-[200px] rounded-full border-4 border-white object-cover overflow-hidden"
              width={50}
              height={50}
            />{' '}
            <Image
              src={quote02}
              className="rounded-3xl  w-[322px] h-[233px] md:w-[445px] md:h-[267px]"
              alt="magnumLogo "
            />
          </div>
          <div className="md:w-[400px] m-auto relative flex flex-col gap-3">
            <Image src={quote} alt="quote" />
            <p className="w-[300px] md:w-full font-light text-sm md:text-lg text-center ">
              Мне особенно понравилась объективность системы оценивания,
              благодаря «индексу уязвимости». Я и ещё много других, нуждающихся
              в помощи, получили её несмотря на отдалённость от больших городов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
