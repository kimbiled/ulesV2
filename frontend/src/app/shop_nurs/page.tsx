'use client';

import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import { exitForm } from '@public/assets';

const Shop = () => {
  const Shops = [
    {
      src: 'https://greenmall.kz/storage/brands/September2021/WyXgKGRq5SbfqZjYJBwP.png',
      status: 'Shop',
      address: 'Turan 55d',
      rank: '#010',
      manager: 'Liada Martinez',
      rating: 4.6,
    },
  ];

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

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center py-6 absolute z-10 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-screen h-screen scrollHide drop-shadow-2xl">
            <div className="w-6/12 h-5/12 rounded-xl bg-white shadow-lg flex flex-col p-6 ">
              <div className="flex justify-between align-center">
                <p className="mb-8 font-medium text-center text-black-400 text-lg">
                  Заполните форму для добавление товара
                </p>
                <Image
                  src={exitForm}
                  className="w-[14px] h-[14px]"
                  alt="close_form"
                  onClick={() => setShowModal(!showModal)}
                />
              </div>
              <div>
                <form>
                  <div className="relative z-0 w-4/12 mb-6 group">
                    <input
                      type="text"
                      name="product_name"
                      id="product_name"
                      className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={productName}
                      onChange={e => setProductName(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="product_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Название продукта
                    </label>
                  </div>
                  <div className="relative z-0 w-4/12 mb-6 group">
                    <input
                      type="text"
                      name="product_category"
                      id="product_category"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={productCategory}
                      onChange={e => setProductCategory(e.target.value)}
                      required
                    />
                    <label
                      htmlFor="product_category"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Категория
                    </label>
                  </div>
                  <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                      <input
                        type="text"
                        name="product_amount"
                        id="product_amount"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={productAmount}
                        onChange={e => setProductAmount(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="product_amount"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Количество товаров
                      </label>
                    </div>

                    <div className="relative z-0 w-5/12 mb-6 group">
                      <div className="flex justify-center">
                        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                          <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-blue-500 before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent]  after:block after:h-4 after:w-4 after:rounded-full checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-blue-500 checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="radio"
                            name="inlineRadioOptions"
                            id="radio_kilogramm"
                            value="kilogramm"
                          />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="radio_kilogramm">
                            кг
                          </label>
                        </div>

                        <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                          <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-blue-500 before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] after:block after:h-4 after:w-4 after:rounded-full checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-blue-500 checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] "
                            type="radio"
                            name="inlineRadioOptions"
                            id="radio_liter"
                            value="liter"
                          />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="radio_liter">
                            л
                          </label>
                        </div>

                        <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem]">
                          <input
                            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-blue-500 before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] after:block after:h-4 after:w-4 after:rounded-full checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-blue-500 checked:after:[transform:translate(-50%,-50%)] hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-500 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                            type="radio"
                            name="inlineRadioOptions"
                            id="radio_volume"
                            value="volume"
                          />
                          <label
                            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                            htmlFor="radio_volume">
                            шт
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-0 w-4/12 mb-6 group">
                      <input
                        type="text"
                        name="product_category"
                        id="product_category"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={productCategory}
                        onChange={e => setProductCategory(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="product_category"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Категория
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={handlePostProduct}>
                    Отправить
                  </button>
                  <button
                    onClick={() => setShowModal(!showModal)}
                    type="button"
                    className="text-black bg-gray-200 hover:bg-gray-300  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ml-4">
                    Отмена
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="w-full blur-md opacity-40 bg-primary h-screen flex flex-row gap-12 justify-evenly font-raleway">
            <div className="flex flex-col">
              <div className="w-[440px] h-[625px] bg-white rounded-3xl relative">
                <div className="w-[390px] h-[545px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-4">
                  <p className="font-extrabold text-6xl">Úles account</p>

                  <div className="flex py-6">
                    <div className="flex flex-row">
                      {Shops.map(info => (
                        <div className="flex">
                          <div className="flex gap-3 items-center">
                            <img
                              src={info.src}
                              alt="random"
                              width={55}
                              height={55}
                              className="rounded-full border-2 border-slate-900"
                            />
                            <div>
                              <p className="font-xs font-medium">
                                Úles Status:
                              </p>
                              <p className="font-bold">{info.status}</p>
                            </div>
                          </div>

                          <div className="flex items-center ml-[120px]">
                            {/* здесь надо марджин убрать */}
                            <p className="font-semibold">
                              Rank:{' '}
                              <span className="text-slate-600 font-semibold">
                                {info.rank}
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {Shops.map(info => (
                    <div className="flex flex-row justify-between">
                      <div className="w-[150px] h-[70px] rounded-3xl border-slate-700 border-[1px] flex justify-center items-center">
                        <p className="font-semibold font-lg">
                          Rating :{' '}
                          <span className="text-slate-600 font-poppins">
                            {info.rating}
                          </span>
                          ⭐
                        </p>
                      </div>

                      <div className="w-[195px] h-[70px] rounded-3xl border-slate-700 border-[1px] flex justify-center items-center">
                        <p className="font-semibold font-lg">
                          Address :{' '}
                          <span className="text-slate-600 font-poppins">
                            {info.address}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-row w-[390px] h-[120px] px-4 border-slate-700 border-[1px] rounded-3xl gap-4">
                    <div className="flex">
                      <img
                        src="../../assets/heart.svg"
                        width={66}
                        height={60}
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="underline text-slate-500 font-bold text-2xl font-poppins">
                        2.761
                      </p>
                      <p className="text-slate-500 text-lg font-medium text-lg">
                        Total people helped
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row w-[390px] h-[120px] px-4 border-slate-700 border-[1px] rounded-3xl gap-4">
                    <div className="flex">
                      <img
                        src="../../assets/heart-red.svg"
                        width={66}
                        height={60}
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="underline text-slate-500 font-bold text-2xl font-poppins">
                        580 000₸
                      </p>
                      <p className="text-slate-500 text-lg">
                        Total people helped
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      className="w-[160px] h-[50px] rounded-3xl text-white font-bold font-lg bg-[#8CC8D1]"
                      onClick={() => setShowModal(true)}>
                      Add product
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-auto h-auto bg-white">
              <table className="table-fixed w-auto h-auto bg-white font-poppins font-medium">
                <thead>
                  <tr className="bg-neutral-300 h-20 text-sm">
                    <th>Product</th>
                    <th>Product name</th>
                    <th>Type</th>
                    <th className="px-4">Quantity</th>
                    <th className="px-4">Edit Products</th>
                    <th className="px-4">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {Products.map(product => (
                    <tr className="text-center">
                      <td>
                        <img
                          src={product.src}
                          alt={product.alt}
                          width={110}
                          height={110}
                        />
                      </td>
                      <td className="px-6">
                        {product.name}, {product.info}
                      </td>
                      <td className="px-6">{product.type}</td>
                      <td className="">{product.quantity}</td>
                      <td className="text-sky-500 cursor-pointer">
                        {product.edit}
                      </td>
                      <td className="text-sky-500 px-6 cursor-pointer">
                        {product.delete}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full bg-primary h-screen flex flex-row gap-12 justify-evenly font-raleway">
          <div className="flex flex-col">
            <div className="w-[440px] h-[625px] bg-white rounded-3xl relative">
              <div className="w-[390px] h-[545px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex flex-col gap-4">
                <p className="font-extrabold text-6xl">Úles account</p>

                <div className="flex py-6">
                  <div className="flex flex-row">
                    {Shops.map(info => (
                      <div className="flex">
                        <div className="flex gap-3 items-center">
                          <img
                            src={info.src}
                            alt="random"
                            width={55}
                            height={55}
                            className="rounded-full border-2 border-slate-900"
                          />
                          <div>
                            <p className="font-xs font-medium">Úles Status:</p>
                            <p className="font-bold">{info.status}</p>
                          </div>
                        </div>

                        <div className="flex items-center ml-[120px]">
                          {/* здесь надо марджин убрать */}
                          <p className="font-semibold">
                            Rank:{' '}
                            <span className="text-slate-600 font-semibold">
                              {info.rank}
                            </span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {Shops.map(info => (
                  <div className="flex flex-row justify-between">
                    <div className="w-[150px] h-[70px] rounded-3xl border-slate-700 border-[1px] flex justify-center items-center">
                      <p className="font-semibold font-lg">
                        Rating :{' '}
                        <span className="text-slate-600 font-poppins">
                          {info.rating}
                        </span>
                        ⭐
                      </p>
                    </div>

                    <div className="w-[195px] h-[70px] rounded-3xl border-slate-700 border-[1px] flex justify-center items-center">
                      <p className="font-semibold font-lg">
                        Address :{' '}
                        <span className="text-slate-600 font-poppins">
                          {info.address}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex flex-row w-[390px] h-[120px] px-4 border-slate-700 border-[1px] rounded-3xl gap-4">
                  <div className="flex">
                    <img src="../../assets/heart.svg" width={66} height={60} />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="underline text-slate-500 font-bold text-2xl font-poppins">
                      2.761
                    </p>
                    <p className="text-slate-500 text-lg font-medium text-lg">
                      Total people helped
                    </p>
                  </div>
                </div>

                <div className="flex flex-row w-[390px] h-[120px] px-4 border-slate-700 border-[1px] rounded-3xl gap-4">
                  <div className="flex">
                    <img
                      src="../../assets/heart-red.svg"
                      width={66}
                      height={60}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="underline text-slate-500 font-bold text-2xl font-poppins">
                      580 000₸
                    </p>
                    <p className="text-slate-500 text-lg">
                      Total people helped
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    className="w-[160px] h-[50px] rounded-3xl text-white font-bold font-lg bg-[#8CC8D1]"
                    onClick={() => setShowModal(true)}>
                    Add product
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-auto h-auto bg-white">
            <table className="table-fixed w-auto h-auto bg-white font-poppins font-medium">
              <thead>
                <tr className="bg-neutral-300 h-20 text-sm">
                  <th>Product</th>
                  <th>Product name</th>
                  <th>Type</th>
                  <th className="px-4">Quantity</th>
                  <th className="px-4">Edit Products</th>
                  <th className="px-4">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Products.map(product => (
                  <tr className="text-center">
                    <td>
                      <img
                        src={product.src}
                        alt={product.alt}
                        width={110}
                        height={110}
                      />
                    </td>
                    <td className="px-6">
                      {product.name}, {product.info}
                    </td>
                    <td className="px-6">{product.type}</td>
                    <td className="">{product.quantity}</td>
                    <td className="text-sky-500 cursor-pointer">
                      {product.edit}
                    </td>
                    <td className="text-sky-500 px-6 cursor-pointer">
                      {product.delete}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
