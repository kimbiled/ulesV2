'use client';

import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { exitForm } from '@public/assets';

export default function Profile() {
  const Products = [
    {
      name: 'Milk 3.2%',
      info: 'Milk from company "Zenchenko", 1 liter ',
      alt: 'Milk',
      type: 'Drink',
      quantity: '50',
      edit: 'Edit',
      delete: 'Delete',
    },
    {
      name: 'Milk 3.2%',
      info: 'Milk from company "Zenchenko", 1 liter ',
      alt: 'Milk',
      type: 'Drink',
      quantity: '50',
      edit: 'Edit',
      delete: 'Delete',
    },
    {
      name: 'Milk 3.2%',
      info: 'Milk from company "Zenchenko", 1 liter ',
      alt: 'Milk',
      type: 'Drink',
      quantity: '50',
      edit: 'Edit',
      delete: 'Delete',
    },
    {
      name: 'Milk 3.2%',
      info: 'Milk from company "Zenchenko", 1 liter ',
      alt: 'Milk',
      type: 'Drink',
      quantity: '50',
      edit: 'Edit',
      delete: 'Delete',
    },
  ];
  const router = useRouter();

  const handleGetProduct = async (event: SyntheticEvent) => {
    event.preventDefault();
    await axios
      .get('http://127.0.0.1:8000/service/get-products/', {})
      .then(response => {
        console.log(response);
        console.log('Work');
      });

    await router.push('/service/get-products/');
  };

  const handlePostProduct = async (event: SyntheticEvent) => {
    event.preventDefault();
    await axios
      .post('http://127.0.0.1:8000/service/create-new-product/', {})
      .then(response => {
        console.log(response);
        console.log('Work');
      });

    await router.push('/service/create-new-product/');
  };

  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productAmount, setProductAmount] = useState('');
  const [quantityPerUnit, setQuantityPerUnit] = useState('');

  return showModal ? (
    <div className="flex justify-center items-center py-6 absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-screen h-screen scrollHide drop-shadow-2xl">
      <div className="w-4/12 h-5/12 rounded-xl bg-white shadow-lg flex justify-center p-6 ">
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg  ">
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Заполните форму для добавление товара
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Наименование товара
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Черный хлеб"
                    onChange={event => setProductName(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Категория товара
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Продукты питания"
                    onChange={event => setProductCategory(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Количество товара
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="10"
                    onChange={event => setProductAmount(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Количество товара в упаковке
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="5"
                    onChange={event => setQuantityPerUnit(event.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-between align-center">
          <Image
            src={exitForm}
            className="w-[14px] h-[14px]"
            alt="close_form"
            onClick={() => setShowModal(!showModal)}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-[#F7F7FB] w-[calc(100vw-280px)] p-9 h-[calc(100vh-80px)]">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Address</h2>
        <p className="mb-4">123 Example Street, City, State, ZIP</p>

        <h2 className="text-xl font-bold mb-2">Company</h2>
        <p className="mb-4">Example Company</p>

        <h2 className="text-xl font-bold mb-2">Rating</h2>
        <div className="flex items-center">
          <svg
            className="w-6 h-6 fill-current text-yellow-500 mr-2"
            viewBox="0 0 20 20">
            <path d="M10 1l2.356 6.824h7.616l-5.832 4.25 2.28 6.942-5.824-4.214-5.824 4.214 2.28-6.942-5.832-4.25h7.616z"></path>
          </svg>
          <p className="font-bold">1000 points</p>
        </div>

        <button
          className="w-[160px] h-[50px] mt-5 rounded-3xl text-white font-bold font-lg bg-[#8CC8D1]"
          onClick={() => setShowModal(true)}>
          Add product
        </button>
      </div>

      <div className="relative overflow-x-auto mt-10">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity per Unit
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product, index) => (
              <tr
                key={index}
                className={`bg-white border-b ${
                  index % 2 === 0 ? 'dark:bg-gray-800' : 'dark:bg-gray-700'
                }`}>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.info}</td>
                <td className="px-6 py-4">{product.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
