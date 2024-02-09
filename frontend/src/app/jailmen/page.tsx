import React from 'react';
import Layout from '@components/Layout/Layout';
const jailmen = () => {
  return (
    <>
      <Layout>
        <div className="fontRaleway flex flex-col justify-center w-screen mt-4 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-row max-xl:gap-3 max-xl:items-center ">
          <div className="max-sm:w-full  h-auto  rounded-3xl flex  mx-auto gap-2 p-4 flex-col">
            <h4 className="font-semibold text-4xl w-full mb-5 ">Ваш Кабинет</h4>
            <div className="flex items-start space-x-4 mb-5">
              <p className="text-normal active:text-blue-600 active:border-b-2 active:border-blue-600 text-gray-400">
                Профиль
              </p>
              <p className="text-normal active:text-blue-600 active:border-b-2 active:border-blue-600 text-gray-400">
                Расписание
              </p>
              <p className="text-normal active:text-blue-600 active:border-b-2 active:border-blue-600 text-gray-400">
                Отметка
              </p>
            </div>

            <div className="mb-5 space-y-6">
              <div className="flex space-x-10   justify-center items-center">
                <div className=" flex flex-col space-y-2">
                  <label htmlFor="">ФИО</label>
                  <input
                    type="text"
                    className="p-2 rounded-lg w-96  outline-none border-2	"
                    placeholder="ФИО"
                  />
                </div>
                <div className=" flex flex-col space-y-2">
                  <label htmlFor="">Почта</label>
                  <input
                    type="mail"
                    className="p-2 rounded-lg w-96  outline-none border-2	"
                    placeholder="mail@gmail.com"
                  />
                </div>
              </div>
              <div className="flex space-x-10   justify-center items-center">
                <div className=" flex flex-col space-y-2">
                  <label htmlFor="">Номер телефона</label>
                  <input
                    type="tel"
                    className="p-2 rounded-lg w-96  outline-none border-2	"
                    placeholder="+7-(747)-537-26-20"
                  />
                </div>
                <div className=" flex flex-col space-y-2">
                  <label htmlFor="">Прописка</label>
                  <input
                    type="text"
                    className="p-2 rounded-lg w-96  outline-none border-2	"
                    placeholder="Хусейн Бен Талал 21"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-end justify-end">
              <button className=" border-[1px] border-gray-300 hover:bg-[#4F82B0] hover:border-[#4F82B0] hover:text-white   ease-in-out duration-300 inline-flex items-center justify-center px-3 py-2 md:px-5 md:py-3 mr-3 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900">
                Отмена
              </button>
              <button className=" border-[1px] border-gray-300 hover:bg-[#4F82B0] hover:border-[#4F82B0] hover:text-white ease-in-out duration-300 inline-flex items-center justify-center px-3 py-2 md:px-5 md:py-3 mr-3 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900">
                Изменить
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default jailmen;
