import Image from 'next/image';
import { downarrow, exitForm } from '@public/assets';
import { useState } from 'react';

const Order = ({
  isOpen,
  modalClose,
  selectedOrder,
}: {
  isOpen: boolean;
  modalClose: any;
  selectedOrder: object;
}) => {
  const [opened, setOpened] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center overflow-y">
      <div className="relative fontRaleway bg-gradient-linear2 w-[445px] h-[680px] text-white rounded-2xl overflow-scroll overflow-x-hidden">
        <Image
          src={exitForm}
          alt="Close"
          onClick={modalClose}
          className="absolute right-10 top-8"
        />
        <div className="w-[370px] m-auto mt-4 mb-3">
          <h4 className="font-semibold text-[28px]">Ваш заказ</h4>
        </div>
        <hr />
        <div className="h-auto w-[370px] font-medium flex flex-col justify-center m-auto gap-3 mt-3">
          <div className="flex flex-col gap-2 relative">
            <p>Адреса магазинов</p>
            <div className="flex flex-row justify-between rounded-xl border-[1px] border-white bg-organisationInput">
              <div className="flex flex-col justify-center p-4  text-sm">
                <p>{selectedOrder.shopName}</p>
                <p>1 адрес: {selectedOrder.fromAddress} </p>

                <p>Magnum</p>
                <p>2 адрес: {selectedOrder.toAddress}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Адрес получения</p>
            <div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">
              <div className="flex flex-col justify-center p-4">
                <p className="text-[10px]">Получатель</p>
                <p className="text-xs">Бокейхана 10</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>ФИО получателя</p>
            <div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">
              <div className="flex flex-col justify-center p-4">
                <p className="text-[10px]">ФИО</p>
                <p className="text-xs">Нургуль Ибрагимова</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Дата доставки</p>
            <div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">
              <div className="flex flex-col justify-center p-4">
                <p className="text-[10px]">Доставка</p>
                <p className="text-xs">16 Июля - 17 Июля</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 relative">
            <p>Продукты</p>
            <div className="flex flex-row justify-between rounded-xl border-[1px] border-white bg-organisationInput">
              <div className="flex flex-col justify-center p-4 text-sm w-full">
                <div className="flex flex-row justify-between">
                  <p>Сметана - Зенченко 20%</p>
                  <p>6 штук</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Сметана - Зенченко 20%</p>
                  <p>6 штук</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Сметана - Зенченко 20%</p>
                  <p>6 штук</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Ules Поинты</p>
            <div className="flex flex-row justify-between h-11 rounded-xl border-[1px] border-white bg-organisationInput">
              <div className="flex flex-col justify-center p-4">
                <p className="text-[10px]">Поинты</p>
                <p className="text-xs">10 очков</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <button className="fontInter w-44 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200">
              Звонок магазину
            </button>

            <button className="fontInter w-44 h-8 bg-white text-black rounded-3xl text-sm hover:bg-stone-200">
              Звонок клиенту
            </button>
          </div>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-center h-20  items-center">
          <button className="fontInter w-52 h-10 bg-ulsDark text-white rounded-3xl">
            Отменить заказ
          </button>
        </div>
      </div>
    </div>
  );
};
export default Order;
