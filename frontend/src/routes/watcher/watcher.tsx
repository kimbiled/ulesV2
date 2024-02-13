"use client";
import Tab from "@ui/Tabs/Tab";
import Tabs from "@ui/Tabs/Tabs";
import { useEffect, useRef, useState } from "react";



export default function Watcher() {

	return (
		<>
			<div className="fontRaleway flex flex-col justify-around w-[90%] mx-auto mt-16 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-col max-xl:gap-3 max-xl:items-center ">
				<h2 className="font-bold text-4xl mb-4">Ваш кабинет</h2>
				<Tabs>
					<Tab title="Профиль">
						<div className="font-semibold text-[28px] text-gray-600 border-b-[1px] border-white p-4 w-full  h-[75px]">
							Заказы
						</div>
					</Tab>
					<Tab title="dsds">
						<div className="font-semibold text-[28px] text-gray-600 border-b-[1px] border-white p-4 w-full  h-[75px]">
							GG
						</div>
					</Tab>

				</Tabs>
				<div className="flex flex-row mx-auto space-x-6 w-screen">
					<div className="max-sm:w-full min-w-[350px] h-auto bg-[#4F82B0] rounded-3xl flex items-center gap-2 p-4 flex-col">
						<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full  h-[75px]">
							Заказы
						</h4>
						<hr />

						
             <div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Василий Пупкин</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
              <div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Василий Пупкин</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
              <div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Василий Пупкин</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
					
					
					</div>
					<div className="max-sm:w-full min-w-[350px] h-auto bg-[#4F82B0] rounded-3xl flex items-center gap-2 p-4 flex-col">
						<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full h-[75px]">
						Список дел:
						</h4>
						<hr />
						<div className="flex flex-col gap-3 w-full">
							<div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Общественные работы</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
							<div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Общественные работы</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
							<div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Общественные работы</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
							<div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Общественные работы</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
							<div className="border-white border-[1px] w-full h-14 bg-volunteerColorHover ease-in-out text-white rounded-xl font-medium flex justify-between items-center p-4 mt-4 ">
								<p>Общественные работы</p>
                <input  id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

							</div>
							
						</div>
					</div>
					<div className="max-sm:w-full min-w-[500px] h-auto bg-[#4F82B0] rounded-3xl flex items-center gap-2 p-4 flex-col  text-white">
						<div className="flex flex-row justify-start gap-4 items-center h-[75px] text-white w-full border-b-[1px] border-white">
							
							<h4 className="font-semibold text-[28px] text-white border-b-[1px] border-white p-4 w-full  h-[75px]">
								Расписание
							</h4>
						</div>
						<hr />
						<div className="w-full flex flex-col gap-3 text-white">
						<div class="container mx-auto mt-10">
  <div class="wrapper bg-white rounded shadow w-full ">
    <div class="header flex justify-between border-b p-2">
      <span class="text-lg font-bold">
        2024 Февраль
      </span>
      <div class="buttons">
        <button class="p-1">
          <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
            <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
          </svg>
        </button>
        <button class="p-1">
          <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
            <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
          <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
		  <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
		  <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
		  <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
		  <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
		  <th class="p-2 border-r h-10 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
            <span class="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
            <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
          </th>
        </tr>
      </thead>
	  <tbody>
	  <tr class="text-center h-10">
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                            <div class="flex flex-col h-20 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500">1</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                <div
                                  class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                                >
                                  <span class="event-name">
                                    Отметка
                                  </span>
                                  <span class="time ml-2">
                                    12:00 - 14:00
                                  </span>
                                </div>
                                <div
                                  class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                                >
                                  <span class="event-name">
                                    Проверка в клинике
                                  </span>
                                  <span class="time ml-2">
                                    18:00 - 20:00
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                            <div class="flex flex-col h-20 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500">2</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                            </div>
                          </td>
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                            <div class="flex flex-col h-20 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500">3</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                            </div>
                          </td>
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                            <div class="flex flex-col h-20 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500">4</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                            </div>
                          </td>
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                            <div class="flex flex-col h-20 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500">6</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                            </div>
                          </td>
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                            <div class="flex flex-col h-20 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500">7</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                <div
                                  class="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                                >
                                  <span class="event-name">
                                    Проверка статуса
                                  </span>
                                  <span class="time ml-2">
                                    12:30 - 14:00
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td class="border p-1 h-20 xl:w-20 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                            <div class="flex flex-col h-40 mx-auto xl:w-20 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div class="top h-5 w-full">
                                <span class="text-gray-500 text-sm">8</span>
                              </div>
                              <div class="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
    </table>
  </div>
</div>

						</div>
					</div>
				</div>
			</div>
			
		</>
	);
}
