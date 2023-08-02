'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import OrderModal from './OrderModal';

// import { useUser } from "@context/User/useUser";
import { useVolunteer } from '@context/Volunteer/useVolunteer';
import { TAvailableOrder, TOrder, TTop } from '@context/Volunteer/types';

import { downarrow, profileImg } from '@public/assets';

import Layout from '@components/Layout/Layout';
import { TUser } from '@hooks/user/types';
import { useUser } from '@hooks/user/useUser';

export default function Volunteer() {
  const {
    getOrders,
    getAvailableOrders,
    getTop,
    updateProfile,
    assignOrder,
    denyOrder,
  } = useVolunteer();
  // const { user } = useUser();

  const [user, setUser] = useState<TUser | null>(null);

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [isChangeable, setIsChangeable] = useState(false);

  const [availableOrders, setAvailableOrders] = useState<TAvailableOrder[]>([]);
  const [orders, setOrders] = useState<TOrder[]>([]);
  const [ratings, setRatings] = useState<TTop | null>(null);

  const [currentOrder, setCurrentOrder] = useState<TOrder>({} as TOrder);

  const companyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    useUser(localStorage.getItem('access')).then(props => {
      setUser(props.user);
    });

    Promise.all([getAvailableOrders(), getOrders(), getTop()])
      .then(([retrievedAvailableOrders, retrievedOrders, retrievedRating]) => {
        if (retrievedAvailableOrders)
          setAvailableOrders(retrievedAvailableOrders);
        if (retrievedOrders) setOrders(retrievedOrders);
        if (retrievedRating) setRatings(retrievedRating);
      })
      .catch(error => {
        console.log(error);
      });

    return () => {
      setAvailableOrders([]);
      setOrders([]);
      setRatings(null);
    };
  }, []);
  return (
    <Layout>
      <div className="w-full h-full flex flex-row justify-between mb-16 mt-16 fontRaleway">
        <div className="flex flex-col justify-between">
          <div className="w-[445px] h-[530px] bg-gradient-linear2 rounded-3xl text-white flex flex-col ">
            <div className="flex flex-row justify-start gap-4 items-center w-[365px] m-auto">
              <div className="w-[72px] h-[72px] rounded-full bg-gray-400"></div>
              <div>
                <p className="text-lg">{user?.name}</p>

                <p className="text-xs">Данные вашего аккаунта</p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col h-[270px] justify-center p-5">
              <div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput">
                <p className="text-xs">Имя</p>
                <p className="text-sm">{user?.name}</p>
              </div>
              <div className="h-12 w-[365px] font-medium flex flex-col p-4 justify-center m-auto border-[1px] rounded-xl border-white bg-organisationInput">
                <p className="text-xs">Номер телефона</p>
                <p className="text-sm">{user?.phone}</p>
              </div>
            </div>
            <hr className="mb-2" />
            <div className="flex flex-col gap-2">
              <div className="h-auto w-[365px] font-medium flex flex-col justify-center m-auto gap-2">
                <p>Hазвание организации</p>
                <input
                  placeholder={user?.company}
                  type="text"
                  className="fontInter focus:outline-none text-sm w-auto h-9 rounded-3xl border-[1px] border-white flex items-center p-4 text-gray-200 bg-organisationInput"
                  disabled={!isChangeable}
                  defaultValue={user?.company}
                  ref={companyRef}
                />
              </div>
              <div className="flex justify-center items-center p-2 fontInter mb-[20px]">
                <button
                  className="fontInter hover:bg-stone-200 w-36 h-10 bg-white text-black rounded-3xl text-sm"
                  onClick={async () => {
                    if (!companyRef.current) return;

                    if (isChangeable)
                      await updateProfile({
                        company: companyRef.current.value,
                      }).then(() => {
                        // refreshUser();
                      });

                    setIsChangeable(prevState => !prevState);
                  }}
                  type={'button'}>
                  {isChangeable ? 'Сохранить' : 'Изменить'}
                </button>
              </div>
            </div>
          </div>

          <div className="w-[445px] h-[475px] bg-gradient-linear3 rounded-3xl">
            <h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">
              Рейтинг
            </h4>
            <div className="m-auto mt-4 flex flex-col gap-3">
              <div className="border-white border-[1px] w-[390px] h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto ">
                <div className="flex flex-col">
                  <p className="text-xs">{user?.rank} место</p>
                  <p>Вы {user?.name}</p>
                </div>
                <div>
                  <p className="font-medium text-xl">{user?.rating}</p>
                </div>
              </div>
              {ratings?.data.map(rating => {
                if (user?.email === rating.user.email) return;

                return (
                  <div
                    key={rating.user.email}
                    className="border-white border-[1px] w-[390px] h-14 bg-volunteerColor text-white rounded-xl font-medium flex justify-between items-center p-4 m-auto ">
                    <div className="flex flex-col">
                      <p className="text-xs">{rating.rank} место</p>
                      <p>{rating.user.name}</p>
                    </div>
                    <div>
                      <p className="font-medium text-xl">
                        {rating.profile.rating}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="mt-4" />
            <Image
              src={downarrow}
              alt="DownArrow"
              className="m-auto py-2 cursor-pointer"
            />
          </div>
        </div>

        <div className="w-[740px] h-[1050px] bg-gradient-linear2 rounded-3xl overflow-auto">
          <h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 px-10">
            Заказы
          </h4>

          {orders.map(order => {
            return (
              <div
                className="flex flex-row justify-around items-center"
                key={order.id}>
                <div className="m-auto w-16 h-16">
                  <Image src={profileImg} alt="volunteericon" />
                </div>

                <div className="relative flex flex-row justify-between w-[585px] h-28 bg-volunteerColorHover rounded-xl border-[1px] border-white m-auto mt-4 items-center">
                  <div className="text-white font-medium flex flex-row items-center">
                    <div className="w-[135px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
                      <p className="text-xs">Адрес:</p>
                      <p className="text-sm">{order.customer.address}</p>
                    </div>
                    <div className="w-[100px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
                      <p className="text-xs">Дата:</p>
                      <p className="text-sm">{order.order_date}</p>
                    </div>
                    <div className="w-[121px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
                      <p className="text-xs">Имя:</p>
                      <p className="text-sm">{order.customer.name}</p>
                    </div>
                  </div>

                  <div className="mr-2">
                    <button
                      className="fontInter w-36 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
                      onClick={() => {
                        setCurrentOrder(order);
                        setOrderModalOpen(prevState => !prevState);
                      }}>
                      Смотреть
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* other orders that are available for Volunteer */}
          {availableOrders.map(availableOrder => {
            return (
              <div
                className="flex flex-row justify-around items-center"
                key={availableOrder.id}>
                <div className="m-auto w-16 h-16">
                  <Image src={profileImg} alt="volunteericon" />
                </div>
                <div
                  key={availableOrder.id}
                  className="relative flex flex-row justify-between w-[585px] h-28 bg-volunteerColor rounded-xl border-[1px] border-white m-auto mt-4 items-center">
                  <div className="text-white font-medium flex flex-row items-center">
                    <div className="w-[135px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
                      <p className="text-xs">Адрес:</p>

                      <p className="text-sm">
                        {availableOrder.customer.address}
                      </p>
                    </div>
                    <div className="w-[100px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
                      <p className="text-xs">Дата:</p>
                      <p className="text-sm">{availableOrder.order_date}</p>
                    </div>
                    <div className="w-[121px] h-24 border-white border-[1px] rounded-xl ml-4 flex flex-col justify-center p-2">
                      <p className="text-xs">Имя:</p>
                      <p className="text-sm">{availableOrder.customer.name}</p>
                    </div>
                  </div>

                  <button
                    className="fontInter w-36 h-8 mr-2 bg-white text-black rounded-3xl text-sm hover:bg-stone-200"
                    type={'button'}
                    onClick={async () => {
                      await assignOrder(availableOrder.id).then(() => {
                        window.location.reload();
                      });
                    }}>
                    Подтвердить
                  </button>
                </div>
              </div>
            );
          })}
          <hr className="mt-6" />
          <Image
            src={downarrow}
            alt="DownArrow"
            className="m-auto py-2 cursor-pointer"
          />
        </div>
      </div>
      <OrderModal
        isVisible={orderModalOpen}
        setIsVisible={setOrderModalOpen}
        order={currentOrder}
        denyOrder={denyOrder}
      />
    </Layout>
  );
}
