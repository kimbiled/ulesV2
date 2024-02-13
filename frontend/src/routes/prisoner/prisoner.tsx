
import Tab from "@ui/Tabs/Tab";
import Tabs from "@ui/Tabs/Tabs";

export default function Prisoner() {

  return (
    <div className="fontRaleway max-w-6xl flex-col justify-center w-screen mt-4 mb-16 max-sm:flex max-sm:flex-col max-sm:items-center max-md:flex max-md:flex-col max-md:items-center max-lg:flex max-lg:flex-col max-lg:gap-3 max-lg:items-center max-xl:flex max-xl:flex-row max-xl:gap-3 max-xl:items-center ">
      <div className="max-sm:w-full h-auto rounded-3xl flex  mx-auto gap-2 p-4 flex-col">
        <h2 className="font-bold text-4xl mb-5">Ваш кабинет</h2>
        <Tabs>
          <Tab title="Профиль">
            <>

              <div className="mb-5 space-y-6">
                <div className="flex   justify-between items-center">
                  <div className=" flex flex-col space-y-2 w-[47%]">
                    <label htmlFor="">ФИО</label>
                    <input
                      type="text"
                      className="py-2 px-4 rounded-lg  outline-none border-2	"
                      placeholder="ФИО"
                    />
                  </div>
                  <div className=" flex flex-col space-y-2  w-[47%]">
                    <label htmlFor="">Почта</label>
                    <input
                      type="mail"
                      className="py-2 px-4 rounded-lg  outline-none border-2	"
                      placeholder="mail@gmail.com"
                    />
                  </div>
                </div>
                <div className="flex  justify-between items-center">
                  <div className=" flex flex-col space-y-2  w-[47%]">
                    <label htmlFor="">Номер телефона</label>
                    <input
                      type="tel"
                      className="py-2 px-4 rounded-lg  outline-none border-2	"
                      placeholder="+7-(747)-537-26-20"
                    />
                  </div>
                  <div className=" flex flex-col space-y-2  w-[47%]">
                    <label htmlFor="">Прописка</label>
                    <input
                      type="text"
                      className="py-2 px-4 rounded-lg  outline-none border-2	"
                      placeholder="Хусейн Бен Талал 21"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end">
                <button className=" border-[1px] border-gray-300   ease-in-out duration-300 inline-flex items-center justify-center px-3 py-1 md:px-5 md:py-2 mr-5 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900">
                  Отмена
                </button>
                <button className=" border-[1px] bg-[#4F82B0] border-[#4F82B0] text-white ease-in-out duration-300 inline-flex items-center justify-center px-3 py-1 md:px-5 md:py-2 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg  focus:ring-4  focus:ring-primary-900">
                  Изменить
                </button>
              </div>
            </>
          </Tab>
          <Tab title="Расписание">
            <div className="container mx-auto">
              <div className="wrapper bg-white rounded shadow w-full ">
                <div className="header flex justify-between border-b p-2">
                  <span className="text-lg font-bold">
                    2024 Февраль
                  </span>
                  <div className="buttons">
                    <button className="p-1">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="gray" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z" />
                        <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z" />
                      </svg>
                    </button>
                    <button className="p-1">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="gray" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z" />
                        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-2 border-r h-10 xl:w-30 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Воскресенье</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Вс</span>
                      </th>
                      <th className="p-2 border-r h-10 xl:w-30 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Понедельник</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Пн</span>
                      </th>
                      <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Вторник</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Вт</span>
                      </th>
                      <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Среда</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Ср</span>
                      </th>
                      <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Четверг</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Чт</span>
                      </th>
                      <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Пятница</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Пт</span>
                      </th>
                      <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Суббота</span>
                        <span className="xl:hidden lg:hidden md:hidden sm:hidden block">Сб</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center h-20">
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">1</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                            <div
                              className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                            >
                              <span className="event-name">
                                Отметка
                              </span>
                              <span className="time ml-2">
                                12:00 - 14:00
                              </span>
                            </div>
                            <div
                              className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                            >
                              <span className="event-name">
                                Проверка в клинике
                              </span>
                              <span className="time ml-2">
                                18:00 - 20:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">2</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">3</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">4</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">6</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">7</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                            <div
                              className="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                            >
                              <span className="event-name">
                                Проверка статуса
                              </span>
                              <span className="time ml-2">
                                12:30 - 14:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">8</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                    </tr>

                    <tr className="text-center h-20">
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">9</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">10</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">12</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">13</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">14</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">15</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">16</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-center h-20">
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">16</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">17</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">18</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">19</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">20</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">21</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">22</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-center h-20">
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">23</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">24</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">25</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">26</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">27</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">28</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">29</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-center h-20">
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">30</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">31</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">1</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">2</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">3</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500">4</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                      <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                        <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                          <div className="top h-5 w-full">
                            <span className="text-gray-500 text-sm">5</span>
                          </div>
                          <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Tab>
          <Tab title="Отметка">
            <>
              <div className="mb-5 space-y-6">
                <div className="flex justify-between items-center">
                  <div className=" flex flex-col space-y-2 w-[47%]">
                    <label htmlFor="">ИИН</label>
                    <input
                      type="text"
                      className="py-2 px-4 rounded-lg  outline-none border-2	"
                      placeholder="Введите ИИН"
                    />
                  </div>
                  <div className=" flex flex-col space-y-2  w-[47%]">
                    <label htmlFor="">ФИО Принимающего</label>
                    <input
                      type="mail"
                      className="py-2 px-4 rounded-lg  outline-none border-2	"
                      placeholder="Введите ФИО Участкового"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end">
                <button className=" border-[1px] border-gray-300   ease-in-out duration-300 inline-flex items-center justify-center px-3 py-1 md:px-5 md:py-2 mr-5 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg bg-white  focus:ring-4  focus:ring-primary-900">
                  Отмена
                </button>
                <button className=" border-[1px] bg-[#4F82B0] border-[#4F82B0] text-white ease-in-out duration-300 inline-flex items-center justify-center px-3 py-1 md:px-5 md:py-2 text-sm md:text-base font-medium text-center text-ulsDark rounded-lg  focus:ring-4  focus:ring-primary-900">
                  Изменить
                </button>
              </div>
            </>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
