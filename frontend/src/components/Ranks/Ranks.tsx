import { magnum } from '@public/assets';
import React from 'react';
import Image from 'next/image';
const Ranks = () => {
  return (
    <div className=" mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8  ">
      <h2 className="text-center text-4xl font-bold  sm:text-5xl text-ulsDark">
        Топ пользователей
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2">
        <blockquote className="rounded-lg bg-[#5C97CD] p-8   ">
          <div className="flex items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              alt="mockup"
              width={50}
              height={50}
              className="rounded-full object-cover overflow-hidden"
            />

            <div>
              <p className="mt-1 text-lg font-medium text-white">
                Санжар Кыдырбеков
              </p>
            </div>
          </div>

          <p className="line-clamp-2 sm:line-clamp-none mt-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>
        </blockquote>

        <blockquote className="rounded-lg bg-[#5C97CD] p-8 ">
          <div className="flex items-center gap-4">
            <Image
              alt="mockup"
              width={50}
              height={50}
              src={magnum}
              className=" rounded-full object-cover overflow-hidden"
            />

            <div>
              <p className="mt-1 text-lg font-medium text-white">Magnum</p>
            </div>
          </div>

          <p className="line-clamp-2 sm:line-clamp-none mt-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            voluptatem alias ut provident sapiente repellendus.
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default Ranks;
