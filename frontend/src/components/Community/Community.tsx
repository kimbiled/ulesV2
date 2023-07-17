import Image from 'next/image';
import Layout from '../Layout/Layout';
import { magnum, quote, quote01, quote02 } from '@public/assets';

export default function Community() {
  return (
    <div className="fontRaleway flex flex-col gap-4 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <h3 className="text-center font-bold    text-5xl text-ulsDark">
        Что наши клиенты говорят о нас{' '}
      </h3>
      <div className="flex flex-row mb-24 justify-center gap-16 mt-12">
        <div className="flex flex-col gap-20">
          <div className="w-[445px] rounded-3xl h-[230px] relative">
            <Image
              src={magnum}
              alt="magnumLogo"
              className="absolute left-[200px] rounded-full border-4 border-white object-cover overflow-hidden"
              width={50}
              height={50}
            />{' '}
            <Image
              src={quote01}
              width={445}
              height={267}
              className="rounded-3xl"
              alt="magnumLogo "
            />
          </div>
          <div className="w-[400px] m-auto relative flex flex-col gap-3">
            <Image src={quote} alt="quote" />
            <p className="font-light  text-lg text-center ml-6">
              Прежде всего меня удивила работоспобность алгоритма, где по
              сравнению с другими платформами, эффективность потребления товаров
              возросла неимоверно. Автоматизация Úles просто на высочайшем
              уровне!
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          <div className="w-[445px] rounded-3xl h-[230px] relative">
            <Image
              src={magnum}
              alt="magnumLogo"
              className="absolute left-[200px] rounded-full  border-4 border-white object-cover overflow-hidden"
              width={50}
              height={50}
            />
            <Image
              src={quote02}
              width={445}
              height={267}
              className="rounded-3xl"
              alt="magnumLogo "
            />
          </div>
          <div className="w-[400px] m-auto relative flex flex-col gap-3">
            <Image src={quote} alt="quote" />
            <p className="font-light  text-lg text-center ml-6">
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
