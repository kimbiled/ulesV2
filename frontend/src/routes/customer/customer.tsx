'use client';
import { Fragment, useRef, useState, useEffect } from 'react';

import { useCustomer } from '@context/Customer/useCustomer';

import type { TOrder } from '@context/Volunteer/types';
import type { TUser } from '@hooks/user/types';

export default function Customer({ user }: { user: TUser | null }) {
  const { getOrder, orderConfirm, updateProfile } = useCustomer();

  const [order, setOrder] = useState<TOrder | null>(null);
  const [isChange, setChange] = useState<boolean>(false);

  const addressRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Promise.all([getOrder()])
      .then(([retrievedOrders]) => {
        if (retrievedOrders) setOrder(retrievedOrders);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const wantedProducts = [
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
    <div className="fontRaleway flex flex-row justify-around w-screen mt-16 mb-16 max-sm:flex max-sm:flex-col max-sm:gap-3 max-sm:items-center max-md:flex max-md:flex-col max-md:gap-3 max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-row max-xl:gap-3 max-xl:items-center ">
      <div className="max-sm:w-[380px] max-md:w-[450px] max-lg:w-[475px] max-xl:w-[390px] w-[505px] h-auto bg-gradient-linear3 rounded-3xl flex items-center gap-2 p-4 flex-col">
        {order ? (
          <div>
            <div className="max-sm:w-[320px] max-md:w-[390px] max-lg:w-[415px] max-xl:w-[330px] bg-volunteerColor w-[465px] h-auto py-4 gap-4 rounded-3xl border-[1px] border-white flex flex-wrap items-center justify-evenly">
              <div className="w-full text-center">
                {order?.order_date && (
                  <p className="font-semibold text-xl text-white">
                    Заказ создан {order.order_date}
                  </p>
                )}
              </div>
              {order?.order_details.map(item => (
                <div
                  key={item.id}
                  className="max-sm:w-36 max-sm:h-11 w-44 h-14 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-2">
                  <div className="flex flex-row justify-between">
                    <p className="text-[10px]">Название</p>
                    <p className="text-[10px]">Количество</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p className="text-sm">{item.product.product_name}</p>
                    <p className="text-sm">
                      {item.quantity} шт
                      {/*{item.product.category.unit_of_measurement}*/}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-between flex-row-reverse mt-4">
              <button
                className="fontInter hover:bg-stone-200 w-36 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm max-sm:w-28"
                type={'button'}
                onClick={async () => {
                  if (!order) return;

                  await orderConfirm(order.id).then(() => {
                    window.location.reload();
                  });
                }}>
                Подтвердить
              </button>
            </div>
          </div>
        ) : (
          <p className="font-semibold text-center text-lg text-white p-1 w-full mt-4">
            У вас пока нет заказа
          </p>
        )}
      </div>
      <div className="w-[445px] h-auto bg-gradient-linear3 rounded-3xl text-white flex flex-col gap-5 max-sm:w-[380px] max-md:w-[450px] max-lg:w-[475px] max-xl:w-[475px] max-xl:h-[540px]">
        <div className="flex justify-center items-center mt-8">
          <div className="flex flex-row gap-4 items-center w-[365px] max-sm:w-[280px] max-md:w-[340px] max-lg:w-[360px] max-xl:w-[320px]">
            <div className="w-[72px] h-[72px] rounded-full bg-gray-400"></div>
            <div>
              <p className="text-lg">{order?.volunteer.name}</p>
              <p className="text-xs">Данные волонтера</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-5">
          <div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput max-sm:w-[320px] max-md:w-[360px] max-lg:w-[400px] max-xl:w-[300px]">
            <p className="text-xs">Имя:</p>
            <p className="text-sm">{order?.volunteer.name}</p>
          </div>
          <div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput max-sm:w-[320px] max-md:w-[360px] max-lg:w-[400px] max-xl:w-[300px]">
            <p className="text-xs">Номер телефона:</p>
            <p className="text-sm">{order?.volunteer.phone}</p>
          </div>
          <div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput max-sm:w-[320px] max-md:w-[360px] max-lg:w-[400px] max-xl:w-[300px]">
            <p className="text-xs">Почта:</p>
            <p className="text-sm">{order?.volunteer.email}</p>
          </div>
          {/*<div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput max-sm:w-[320px] max-md:w-[360px] max-lg:w-[400px] max-xl:w-[300px]">*/}
          {/*	<p className="text-xs">Организации</p>*/}
          {/*	<p className="text-sm">{user?.company}</p>*/}
          {/*</div>*/}
          {/*<div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput max-sm:w-[320px] max-md:w-[360px] max-lg:w-[400px] max-xl:w-[300px]">*/}
          {/*	<p className="text-xs">Ules поинты</p>*/}
          {/*	<p className="text-sm">{user?.rank}</p>*/}
          {/*</div>*/}
        </div>
        <hr />
      </div>

      <div className="w-3/12 h-auto bg-gradient-linear3 rounded-3xl text-white p-4 max-sm:w-[380px] max-md:w-[450px] max-lg:w-[475px] max-xl:w-[390px] max-xl:h-[540px]">
        <div className="flex flex-col gap-5 justify-center w-[280px] m-auto max-md:w-[380px] max-sm:w-[320px] max-lg:w-[420px] max-xl:w-[280px]">
          <div className="flex flex-row  justify-start gap-4 items-center">
            <div className="w-[72px] h-[72px] rounded-full bg-gray-400"></div>
            <div>
              <p className="text-lg">{user?.name}</p>
              <p className="text-xs">Данные вашего аккаунта</p>
            </div>
          </div>
          <div className="w-auto h-auto rounded-xl border-[1px] border-white p-4">
            <p className="text-xs">Список желаемых продуктов</p>
            <div className="">
              <ul className="flex flex-wrap text-sm font-medium list-disc list-inside items-center gap-1">
                {wantedProducts.map(item => (
                  <Fragment key={item.id}>
                    <li className="w-20">{item.product}</li>
                    <div className="w-7 h-2.5 border-white border-[1px] rounded-3xl bg-organisationInput flex justify-center items-center">
                      <p className="font-semibold text-[8px]">0.1 кг</p>
                    </div>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
            <p className="text-[10px]">Ваше имя</p>
            <p className="text-sm">{user?.name}</p>
          </div>
          <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
            <p className="text-[10px]">Ваш номер телефона</p>
            <p className="text-sm">{user?.phone}</p>
          </div>
          {/*<div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">*/}
          {/*	<p className="text-[10px]">Возраст</p>*/}
          {/*	<p className="text-sm">56 лет</p>*/}
          {/*</div>*/}
          <div className="w-auto h-11 rounded-xl border-[1px] border-white flex flex-col justify-center text-white p-4">
            <p className="text-[10px]">Ваш адрес</p>
            <input
              type="text"
              className="bg-transparent outline-none text-sm"
              placeholder="Кабайбай Батыра 51/1"
              disabled={!isChange}
              defaultValue={user?.address}
              ref={addressRef}
            />
          </div>
          <div className="flex w-full justify-center ">
            <button
              className="fontInter hover:bg-stone-200 w-52 h-8 bg-white text-black rounded-3xl mb-1 mt-1 text-sm"
              onClick={async () => {
                if (!addressRef.current) return;

                if (isChange)
                  await updateProfile(addressRef.current.value).then(() => {});

                setChange(prevState => !prevState);
              }}>
              {isChange ? 'Сохранить' : 'Изменить'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
