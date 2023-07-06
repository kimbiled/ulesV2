import React from 'react';
import { ulesphone } from '../../app/assets/index';
import styles, { layout } from '../../style';
import Image from 'next/image';
const Phone = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImgReverse}>
        <Image
          src={ulesphone}
          alt="billing"
          className="w-[80%] h-[80%] relative z-[5]"></Image>
      </div>
      <div className={`${layout.sectionInfo} gap-4 `}>
        <h2 className="font-bold  text-3xl text-ulsDark">
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
