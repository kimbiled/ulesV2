import { magnum } from '@public/assets';
import React from 'react';
import Image from 'next/image';
const Ranks = () => {
  return (
    <div className=" fontRaleway flex flex-col lg:flex-row justify-center items-center lg:space-x-10 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 ">
      <div className="space-y-5 md:space-y-10 max-w-xl ">
        <h2 className=" text-2xl md:text-4xl font-bold text-left  text-ulsDark">
          Лидеры рейтинга социальной помощи
        </h2>
        <p className="text-xs lg:text-lg font-medium ">
          Нет никого, кто любил бы боль саму по себе, кто искал бы её и кто
          хотел бы иметь её просто потому, что это боль..
        </p>
        <button className="hover:bg-gray-100 hover:text-ulsDark duration-300 ease-in-out  items-center justify-center px-3 py-2 md:px-5 md:py-3 mr-3 text-sm md:text-base font-medium text-center   text-white rounded-lg  bg-ulsDark  ">
          Таблица
        </button>
      </div>

      <div className="mt-12 flex flex-col space-y-10">
        <blockquote className="rounded-lg bg-white p-4 lg:p-8 max-w-xl">
          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              alt="mockup"
              width={25}
              height={25}
              className="rounded-full w-[40px] lg:w-[50px] object-cover overflow-hidden"
            />

            <div>
              <p className="mt-1  text-base lg:text-lg font-medium text-ulsDark">
                Санжар Кыдырбеков
              </p>
              <p className=" text-xs lg:text-md font-medium text-gray-500">
                180 Ules поинт
              </p>
            </div>
          </div>

          <p className="text-sm md:text-md mt-4 text-ulsDark">
            Санжар является активным участником сообщества Ules и внес
            значительный вклад в поддержку социально-уязвимых категорий
            населения. Его щедрые пожертвования и непрерывное участие в
            волонтерских активностях помогли улучшить жизнь многих людей. Санжар
            - вдохновение для всех нас!
          </p>
        </blockquote>

        <blockquote className="rounded-lg bg-white p-4 lg:p-8 max-w-xl">
          <div className="flex items-center gap-4">
            <Image
              alt="mockup"
              src={magnum}
              width={25}
              height={25}
              className=" rounded-full w-[40px] lg:w-[50px] object-cover overflow-hidden"
            />

            <div>
              <p className="mt-1  text-base lg:text-lg font-medium text-ulsDark">
                Magnum
              </p>
              <p className=" text-xs lg:text-md font-medium text-gray-500">
                180 Ules поинт
              </p>
            </div>
          </div>

          <p className="text-sm md:text-md mt-4 text-ulsDark">
            Magnum - еще один важный участник сообщества Ules, который проявляет
            постоянную активность в поддержке нуждающихся. Его щедрость и
            энергия привносят надежду в жизни тех, кто нуждается в помощи.
            Спасибо, Magnum, за ваше самоотверженное участие!
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Ranks;
