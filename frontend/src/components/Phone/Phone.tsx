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
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "></div>
      </div>
      <div className={`${layout.sectionInfo} gap-4`}>
        <h2 className="font-bold text-5xl">Мы за легкость и удобство</h2>
        <p className="text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda architecto dolore dolorem debitis facere possimus, aliquam expedita perspiciatis quisquam quam quo omnis impedit pariatur delectus ut a similique iste praesentium velit aperiam labore odit. Aliquam?</p>
      </div>
    </section>
  );
};

export default Phone;