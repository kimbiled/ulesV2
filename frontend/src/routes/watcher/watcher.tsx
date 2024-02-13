"use client";
import Tab from "@ui/Tabs/Tab";
import Tabs from "@ui/Tabs/Tabs";
import { useEffect, useRef, useState } from "react";
export default function Watcher() {
  return (
    <>
      <div className="fontRaleway max-w-6xl flex-col justify-around w-[90%] mx-auto mt-16 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-col max-xl:gap-3 max-xl:items-center ">
        <div className="max-sm:w-full h-auto  rounded-3xl flex  mx-auto gap-2 p-4 flex-col">
          <h2 className="font-bold text-4xl mb-5">Ваш кабинет</h2>
          <Tabs>
            <Tab title="Профиль">
              <div className="container mx-auto">
                <div className="mb-5 space-y-6">
                  <div className="flex justify-between items-center">
                    <div className=" flex flex-col space-y-2  w-[47%]">
                        <h2 className="text-lg font-bold">Фильтры: </h2>
                    </div>
                    <div className="flex items-center justify-between space-y-2 w-[47%]">
                      <select
                        className="py-2 px-4 rounded-lg  outline-none border-2	"
                        placeholder="Введите ИИН"
                      >
                        <option>Выберите подопечного</option>
                        <option>Аспандияр</option>
                        <option>Уалих</option>
                        <option>Аспандияр</option>
                      </select>
                      <select
                        className="py-2 px-4 rounded-lg  outline-none border-2	"
                        placeholder="Введите ФИО Участкового"
                      >
                        <option>Выберите дело</option>
                        <option>Общественные работы</option>
                        <option>Уалих</option>
                        <option>Аспандияр</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="wrapper bg-white rounded shadow w-full ">
                <div className="lg:flex lg:h-full lg:flex-col">
                  <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">
                      <time dateTime="2022-01">Январь 2024</time>
                    </h1>
                  </header>
                  <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
                    <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                      <div className="flex justify-center bg-white py-2">
                        <span>П</span>
                        <span className="sr-only sm:not-sr-only">онедельник</span>
                      </div>
                      <div className="flex justify-center bg-white py-2">
                        <span>В</span>
                        <span className="sr-only sm:not-sr-only">торник</span>
                      </div>
                      <div className="flex justify-center bg-white py-2">
                        <span>С</span>
                        <span className="sr-only sm:not-sr-only">реда</span>
                      </div>
                      <div className="flex justify-center bg-white py-2">
                        <span>Ч</span>
                        <span className="sr-only sm:not-sr-only">етверг</span>
                      </div>
                      <div className="flex justify-center bg-white py-2">
                        <span>П</span>
                        <span className="sr-only sm:not-sr-only">ятница</span>
                      </div>
                      <div className="flex justify-center bg-white py-2">
                        <span>С</span>
                        <span className="sr-only sm:not-sr-only">уббота</span>
                      </div>
                      <div className="flex justify-center bg-white py-2">
                        <span>В</span>
                        <span className="sr-only sm:not-sr-only">оскресенье</span>
                      </div>
                    </div>
                    <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                      <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2021-12-27">27</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2021-12-28">28</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2021-12-29">29</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2021-12-30">30</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2021-12-31">31</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-01">1</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-01">2</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-03">3</time>
                          <ol className="mt-2">
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Отметка</p>
                                <time dateTime="2022-01-03T10:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">10:00</time>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Прием врача</p>
                                <time dateTime="2022-01-03T14:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">14:00</time>
                              </a>
                            </li>
                          </ol>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-04">4</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-05">5</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-06">6</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-07">7</time>
                          <ol className="mt-2">
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">Date night</p>
                                <time dateTime="2022-01-08T18:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">6PM</time>
                              </a>
                            </li>
                          </ol>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-08">8</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-09">9</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-10">10</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-11">11</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-12" className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">12</time>
                          <ol className="mt-2">
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">В участок</p>
                                <time dateTime="2022-01-25T14:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block">11:00</time>
                              </a>
                            </li>
                          </ol>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-13">13</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-14">14</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-15">15</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-16">16</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-17">17</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-18">18</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-19">19</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-20">20</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-21">21</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-22">22</time>
                          <ol className="mt-2">
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600"></p>
                                <time dateTime="2022-01-22T15:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"></time>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600"></p>
                                <time dateTime="2022-01-22T19:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"></time>
                              </a>
                            </li>
                          </ol>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-23">23</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-24">24</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-25">25</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-26">26</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-27">27</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-28">28</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-29">29</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-30">30</time>
                        </div>
                        <div className="relative bg-white px-3 py-2">
                          <time dateTime="2022-01-31">31</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2022-02-01">1</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2022-02-02">2</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2022-02-03">3</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2022-02-04">4</time>
                          <ol className="mt-2">
                            <li>
                              <a href="#" className="group flex">
                                <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600"></p>
                                <time dateTime="2022-02-04T21:00" className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"></time>
                              </a>
                            </li>
                          </ol>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2022-02-05">5</time>
                        </div>
                        <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
                          <time dateTime="2022-02-06">6</time>
                        </div>
                      </div>
                      <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2021-12-27" className="ml-auto">27</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2021-12-28" className="ml-auto">28</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2021-12-29" className="ml-auto">29</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2021-12-30" className="ml-auto">30</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2021-12-31" className="ml-auto">31</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-01" className="ml-auto">1</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-02" className="ml-auto">2</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-03" className="ml-auto">3</time>
                          <span className="sr-only">2 events</span>
                          <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                          </span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-04" className="ml-auto">4</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-05" className="ml-auto">5</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-06" className="ml-auto">6</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-07" className="ml-auto">7</time>
                          <span className="sr-only">1 event</span>
                          <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                          </span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-08" className="ml-auto">8</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-09" className="ml-auto">9</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-10" className="ml-auto">10</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-11" className="ml-auto">11</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-indigo-600 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-12" className="ml-auto">12</time>
                          <span className="sr-only">1 event</span>
                          <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                          </span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-13" className="ml-auto">13</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-14" className="ml-auto">14</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-15" className="ml-auto">15</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-16" className="ml-auto">16</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-17" className="ml-auto">17</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-18" className="ml-auto">18</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-19" className="ml-auto">19</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-20" className="ml-auto">20</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-21" className="ml-auto">21</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-white hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-22" className="ml-auto flex h-6 w-6 items-center justify-center rounded-full bg-gray-900">22</time>
                          <span className="sr-only">2 events</span>
                          <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                          </span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-23" className="ml-auto">23</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-24" className="ml-auto">24</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-25" className="ml-auto">25</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-26" className="ml-auto">26</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-27" className="ml-auto">27</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-28" className="ml-auto">28</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-29" className="ml-auto">29</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-30" className="ml-auto">30</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-01-31" className="ml-auto">31</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-02-01" className="ml-auto">1</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-02-02" className="ml-auto">2</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-02-03" className="ml-auto">3</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-02-04" className="ml-auto">4</time>
                          <span className="sr-only">1 event</span>
                          <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                            <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                          </span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-02-05" className="ml-auto">5</time>
                          <span className="sr-only">0 events</span>
                        </button>
                        <button type="button" className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10">
                          <time dateTime="2022-02-06" className="ml-auto">6</time>
                          <span className="sr-only">0 events</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </Tab>
            <Tab title="Отчеты подопечных" >
              <div className="bg-[#4F82B0] w-full h-screen rounded-2xl flex flex-col gap-6">
                  <div className="p-8 border-b">
                    <h2 className="font-semibold text-[28px] text-white">Отчеты подопечных:</h2>
                  </div>
                  <div>
                    <table className="min-w-full text-center text-white">
                      <thead className="uppercase font-bold">
                        <tr>
                          <th scope="col" className=" py-4">Имена подопечных:</th>
                          <th scope="col" className=" py-4">Категория услуг:</th>
                          <th scope="col" className=" py-4">ФИО оказателя услуг:</th>
                          <th scope="col" className=" py-4">Номер справки:</th>
                          <th scope="col" className=" py-4">Дата оказания услуги:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="py-6 font-medium">Арынулы Нурторе</th>
                          <th className="py-6 font-medium">Отметка у участкового</th>
                          <th className="py-6 font-medium">Мейрамбеков Нурсултан</th>
                          <th className="py-6 font-medium">№178468 </th>
                          <th className="py-6 font-medium">12.01.2023</th>
                        </tr>
                        <tr>
                          <th className="py-6 font-medium">Арынулы Нурторе</th>
                          <th className="py-6 font-medium">Отметка у участкового</th>
                          <th className="py-6 font-medium">Мейрамбеков Нурсултан</th>
                          <th className="py-6 font-medium">№178468 </th>
                          <th className="py-6 font-medium">12.01.2023</th>
                        </tr>
                        <tr>
                          <th className="py-6 font-medium">Арынулы Нурторе</th>
                          <th className="py-6 font-medium">Отметка у участкового</th>
                          <th className="py-6 font-medium">Мейрамбеков Нурсултан</th>
                          <th className="py-6 font-medium">№178468 </th>
                          <th className="py-6 font-medium">12.01.2023</th>
                        </tr>
                        <tr>
                          <th className="py-6 font-medium">Арынулы Нурторе</th>
                          <th className="py-6 font-medium">Отметка у участкового</th>
                          <th className="py-6 font-medium">Мейрамбеков Нурсултан</th>
                          <th className="py-6 font-medium">№178468 </th>
                          <th className="py-6 font-medium">12.01.2023</th>
                        </tr>
                        <tr>
                          <th className="py-6 font-medium">Арынулы Нурторе</th>
                          <th className="py-6 font-medium">Отметка у участкового</th>
                          <th className="py-6 font-medium">Мейрамбеков Нурсултан</th>
                          <th className="py-6 font-medium">№178468 </th>
                          <th className="py-6 font-medium">12.01.2023</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>

    </>
  );
}