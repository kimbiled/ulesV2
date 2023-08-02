'use client';

import Layout from '@components/Layout/Layout';
import Image from 'next/image';
import { downarrow, userImg } from '../../../public/assets/index';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TProduct } from '@context/Shop/types';
import { useCustomer } from '@root/context/Customer/useCustomer';
import { useUser } from '@context/User/useUser';

import { useEffect } from 'react';
export default function Customer() {
  const { user } = useUser();
  const { push } = useRouter();
  const [isChange, setChange] = useState(false);
  const { getOrders, confirmOrder } = useCustomer();
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    if (!user) return push('/');
  }, [user]);

  useEffect(() => {
    Promise.all([getOrders()])
      .then(([retrievedProducts]) => {
        if (retrievedProducts) setProducts(retrievedProducts);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const volunteerInfo = [
    {
      id: 1,
      fullName: 'Мейрамбеков Нурсултан',
      deliveryDate: '21.07.2023',
      provider: 'Magnum',
      destination: 'Кабанбай Батыра 51/1',
    },
  ];

  const wanterProducts = [
    {
      id: 1,
      product: 'Хлеб',
    },
    {
      id: 2,
      product: 'Молоко',
    },
    {
      id: 3,
      product: 'Сметана',
    },
    {
      id: 4,
      product: 'Яйца',
    },
    {
      id: 5,
      product: 'Мясо',
    },
    {
      id: 6,
      product: 'Сыр',
    },
    {
      id: 7,
      product: 'Хлопья',
    },
    {
      id: 8,
      product: 'Курица',
    },
    {
      id: 9,
      product: 'Яблоко',
    },
  ];
  return (
    <Layout>
      <div className="fontRaleway flex flex-row justify-between w-screen mt-16 mb-16">
        <div className="w-[845px] h-auto bg-gradient-linear rounded-3xl flex flex-row justify-between p-8">
          <div className="h-auto">
            <div className="bg-volunteerColor w-[465px] h-auto py-4 gap-4 rounded-3xl border-[1px] border-white flex flex-wrap items-center justify-evenly">
              <div className="w-full text-center">
                <p className="font-semibold text-xl text-white">
                  Заказ создан 11.07.2023
                </p>
              </div>
              {products.map(item => (
                <div
                  key={item.id}
                  className="w-44 h-14 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-2">
                  <p className="text-[10px]">Количество продукта</p>
                  <p className="text-sm">{item.productName}</p>
                </div>
              ))}
              <div className="w-full">
                <Image
                  src={downarrow}
                  alt="DownArrow"
                  className="m-auto py-2 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex w-full justify-end mt-4">
              <button className="fontInter hover:bg-stone-200 w-36 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm ">
                Подтвердить
              </button>
            </div>
          </div>

          <div className="w-64 h-[450px] bg-volunteerColor rounded-3xl border-[1px] border-white">
            <div className="flex flex-col items-center gap-3 mt-4">
              <div className="w-52 h-44 rounded-2xl bg-white flex justify-center items-center">
                <Image
                  src={userImg}
                  alt="userImg"
                  className="m-auto py-2 cursor-pointer"
                />
              </div>
              {volunteerInfo.map(item => (
                <>
                  <div
                    key={item.id}
                    className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
                    <p className="text-[10px]">Волонтер</p>
                    <p className="text-sm">{item.fullName}</p>
                  </div>
                  <div className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
                    <p className="text-[10px]">Дата доставки</p>
                    <p className="text-sm">{item.deliveryDate}</p>
                  </div>
                  <div className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
                    <p className="text-[10px]">Поставщик</p>
                    <p className="text-sm">{item.provider}</p>
                  </div>
                  <div className="w-52 h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
                    <p className="text-[10px]">Адрес доставки</p>
                    <p className="text-sm">{item.destination}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[336px] h-auto bg-gradient-linear rounded-3xl text-white p-4">
          <div className="flex flex-col gap-5 justify-center w-[280px] justify-center m-auto">
            <div className="flex flex-row  justify-start gap-4 items-center">
              <div className="w-[72px] h-[72px] rounded-full bg-gray-400"></div>
              <div>
                <p className="text-lg">Ертаев Уалихан</p>
                <p className="text-xs">Данные вашего аккаунта</p>
              </div>
            </div>
            <div className="w-auto h-auto rounded-xl border-[1px] border-white p-4">
              <p className="text-xs">Список желаемых продуктов</p>
              <div className="">
                <ul className="flex flex-wrap text-sm font-medium list-disc list-inside items-center gap-1">
                  {wanterProducts.map(item => (
                    <>
                      <li className="w-20" key={item.id}>
                        {item.product}
                      </li>
                      <div className="w-7 h-2.5 border-white border-[1px] rounded-3xl bg-organisationInput flex justify-center items-center">
                        <p className="font-semibold text-[8px]">0.1 кг</p>
                      </div>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
              <p className="text-[10px]">Ваше имя</p>
              <p className="text-sm">Искаков Даниал Аспандиярович</p>
            </div>
            <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
              <p className="text-[10px]">Возраст</p>
              <p className="text-sm">56 лет</p>
            </div>
            {isChange ? (
              <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
                <p className="text-[10px]">Ваш адрес</p>
                <input
                  type="text"
                  className="bg-transparent outline-none text-sm"
                  placeholder="Кабайбай Батыра 51/1"
                />
              </div>
            ) : (
              <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
                <p className="text-[10px]">Ваш адрес</p>
                <p className="text-sm">Кабанбай Батыра 51/1</p>
              </div>
            )}

            {isChange ? (
              <div className="flex w-full justify-center ">
                <button
                  className="fontInter hover:bg-stone-200 w-52 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm"
                  onClick={() => setChange(false)}>
                  Сохранить
                </button>
              </div>
            ) : (
              <div className="flex w-full justify-center ">
                <button
                  className="fontInter hover:bg-stone-200 w-52 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm"
                  onClick={() => setChange(true)}>
                  Изменить
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
