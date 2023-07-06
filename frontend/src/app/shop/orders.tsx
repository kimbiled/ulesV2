import Search from './search.tsx'

export default function Orders() {
  return (
    <div className="bg-[#F7F7FB] w-[calc(100vw-280px)] p-9 h-[calc(100vh-80px)]">
      <Search />
      <div className="rounded-xl p-3 bg-white mt-4">
        <div className="font-bold text-xl ml-4 mt-2">Заказы</div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="rounded-xl p-4 flex flex-col">
              <div className="text-xl">
                Самса
              </div>
              <div className="font-semibold text-lg">2x</div>
            </div>
            <button className="border-0 bg-[#03bc03] mr-4 text-white p-4 rounded-xl">Подробнее</button>
          </div>
          <div className="flex justify-between items-center">
            <div className="rounded-xl p-4 flex flex-col">
              <div className="text-xl">
                Самса
              </div>
              <div className="font-semibold text-lg">2x</div>
            </div>
            <button className="border-0 bg-[#03bc03] mr-4 text-white p-4 rounded-xl">Подробнее</button>
          </div>
          <div className="flex justify-between items-center">
            <div className="rounded-xl p-4 flex flex-col">
              <div className="text-xl">
                Самса
              </div>
              <div className="font-semibold text-lg">2x</div>
            </div>
            <button className="border-0 bg-[#03bc03] mr-4 text-white p-4 rounded-xl">Подробнее</button>
          </div>
          <div className="flex justify-between items-center">
            <div className="rounded-xl p-4 flex flex-col">
              <div className="text-xl">
                Самса
              </div>
              <div className="font-semibold text-lg">2x</div>
            </div>
            <button className="border-0 bg-[#03bc03] mr-4 text-white p-4 rounded-xl">Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  )
}