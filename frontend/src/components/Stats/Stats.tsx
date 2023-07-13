import { stats } from '../../constants';
import styles from '@root/style';
import Image from 'next/image';
const Stats = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-ulsDark sm:text-4xl">
            Статистика
          </h2>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {stats.map(item => (
              <div
                key={item.id}
                className="shadow-md transform transition-all hover:scale-105 hover:shadow-xl flex flex-col space-y-4 justify-center items-center rounded-3xl border border-gray-100 px-4 py-8 text-center ">
                <Image
                  alt="item"
                  width={100}
                  height={100}
                  src={item.img}></Image>
                <dt className="order-last text-sm font-medium text-gray-500">
                  {item.value}
                </dt>

                <dd className=" font-extrabold text-ulsDark text-xl">
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