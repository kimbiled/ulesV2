import React from 'react';
import { ulesphone } from '../../app/assets/index';
import styles, { layout } from '../../style';
import Image from 'next/image';
const Phone = () => {
  return (
    <section id="product" className="flex flex-row mx-auto justify-evenly items-center">
      <div className="flex flex-col">
        <Image
          src={ulesphone}
          alt="billing"
          className=" relative z-[5]"></Image>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient "></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient "></div>
      </div>

      <div className="flex flex-col w-[540px] gap-4">
        <h2 className="font-bold text-5xl leading-[3rem] ">Мы за легкость и удобство</h2>
        <p className="text-xl font-medium leading-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda architecto dolore dolorem debitis facere possimus, aliquam expedita perspiciatis quisquam quam quo omnis impedit pariatur delectus ut a similique iste praesentium velit aperiam labore odit. Aliquam?</p>
      </div>
    </section>
  );
};

export default Phone;