import { stats } from '../../constants';
import styles from '@root/style';
import Image from 'next/image';
const Stats = () => {
  return (
    <section className=" fontRaleway ">
      <div className="mx-auto  px-2 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-ulsDark sm:text-4xl">
            Статистика
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="px-12 lg:px-5 grid grid-cols-1 gap-8  sm:grid-cols-4">
            {stats.map(item => (
              <div
                key={item.id}
                className=" shadow-md bg-white transform transition-all hover:scale-105 hover:shadow-xl flex flex-col space-y-2 md:space-y-4 justify-center items-center rounded-3xl border border-gray-100 px-2 py-4 md:px-4 md:py-8 text-center ">
                <Image
                  alt="item"
                  width={50}
                  height={50}
                  className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
                  src={item.img}></Image>
                <dt className="order-last text-xs md:text-sm font-medium text-gray-500">
                  {item.value}
                </dt>

                <dd className=" font-extrabold text-ulsDark text-sm md:text-xl">
                  {item.title}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
