import React from 'react';

import styles, { layout } from '../../style';
import Image from 'next/image';
import { ulesphone } from '@public/assets';
const Phone = () => {
  return (
    <section
      id="product"
      className=" fontRaleway flex flex-col gap-4 md:flex-row items-center justify-center mx-auto max-w-screen-xl px-6  py-12  md:py-16 lg:px-8">
      <div className="w-full  order-last md:order-none">
        <Image
          src={ulesphone}
          alt="Phone"
          className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="font-bold  text-2xl md:text-5xl  text-center md:text-left text-ulsDark">
          Мы за легкость и удобство
        </h2>
        <p className="text-sm md:text-lg  px-1 md:px-2 text-gray-500 ">
          Мобильное приложение Úles поможет вам с легкостью управлять своим
          аккаунтом, где с помощью удобного интерфейса будут отображены все ваши
          возможности.
        </p>
        <p className="text-sm md:text-lg px-1 md:px-2 text-gray-500 ">
          Мы обеспечили наиболее продуктивное взаимодействие волонтёров и людей,
          нуждающихся в помощи.
        </p>
      </div>
    </section>
  );
};

export default Phone;
