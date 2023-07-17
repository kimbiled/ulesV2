import React from 'react';

import styles, { layout } from '../../style';
import Image from 'next/image';
import { ulesphone } from '@public/assets';
const Phone = () => {
  return (
    <section id="product" className=" fontRaleway flex flex-row items-center mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      
      <div className='w-3/6 h-[545px] '>
        <Image src={ulesphone}
               alt='Phone'
        />
      </div>

      <div className="flex flex-col w-3/6 ">
        <h2 className="font-bold  text-5xl text-ulsDark">
          Мы за легкость и удобство
        </h2>
        <p className="text-lg font-normal text-gray-500 ">
          Мобильное приложение Úles поможет вам с легкостью управлять своим
          аккаунтом, где с помощью удобного интерфейса будут отображены все ваши
          возможности. Мы обеспечили наиболее продуктивное взаимодействие
          волонтёров и людей, нуждающихся в помощи.
        </p>
      </div>
    </section>
  );
};

export default Phone;
