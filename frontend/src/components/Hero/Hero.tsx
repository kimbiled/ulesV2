import React from 'react';
import styles from '@root/style';
import { discount, robot, volunteer } from '@public/assets/index';
import Image from 'next/image';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className=" bg-[#D6EAF8] overflow-hidden">
      <div className="flex  w-full justify-center items-center  py-8  ">
        <div>
          <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-ulsDark">
            Úles – платформа сбалансированного распределения
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-ulsDark">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-ulsDark  focus:ring-4  focus:ring-primary-900">
            Помочь
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        <div className=" lg:mt-0  flex ">
          <Image src={volunteer} alt="mockup" width={450} height={350} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
