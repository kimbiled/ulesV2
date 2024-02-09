import { uleslogo } from '@public/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" fontInter bg-[#4F82B0] w-full m-auto ">
      <div className="m-auto   lg:py-8 p-4 ">
        <div className="md:flex md:justify-between space-y-10 md:px-20">
          <div className="flex flex-col gap-8">
            <div className="md:mb-0 flex flex-row gap-4 items-center">
              <Image src={uleslogo} height={70} width={60} alt="UlesLogo" />
              <span className="text-4xl font-bold text-white">Úles</span>
            </div>
            <div className="  text-lg text-white">
              <p>Úlesindi Qos!</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4  text-base  md:text-lg font-medium text-white">
                Навигация
              </h2>
              <ul className="text-white flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    Магазин
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    Волонтер
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4  text-base  md:text-lg font-medium text-white">
                Наши партнеры
              </h2>
              <ul className="text-white flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    Партнеры
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    Стать партнером
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4  text-base  md:text-lg font-medium text-white">
                Наши контакты
              </h2>
              <ul className="text-white flex flex-col gap-3">
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    +7 (747) 837 90 97
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-sm md:text-base">
                    info.ules.project@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white sm:mx-auto md:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between md:px-20">
          <span className=" text-sm  lg:text-lg text-white sm:text-center ">
            Copyright © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Ules
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
