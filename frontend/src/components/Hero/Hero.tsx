import React from 'react';
import styles from '@root/style';
import { discount, robot, volunteer, heroBg } from '@public/assets/index';
import Image from 'next/image';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section className="fontRaleway  overflow-hidden">
      <div className="flex relative  w-full min-h-screen justify-center  items-center    ">
        <div className="absolute inset-0">
          <Image src={heroBg} alt="background image" fill />
        </div>
        <div className="relative z-10">
          <h1 className="max-w-5xl  mb-4  text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-white">
            Úles – платформа сбалансированного распределения гуманитарной
            помощи.
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-white">
            Веб-сайт по автоматическому распределению пожертвования для
            поддержки социально-уязвимых категорий населения, используя
            алгоритмы для эффективного сбора и распределения прямой помощи.
          </p>
          <a
            href="#"
            className="hover:bg-ulsDark hover:text-white ease-in-out duration-300 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900">
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
          <a
            href="#"
            className="hover:bg-ulsDark hover:text-white ease-in-out duration-300 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900">
            Помощь
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
      </div>
    </section>
  );
};

export default Hero;
