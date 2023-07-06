import Search from './search.tsx'

export default function Statistics () {
  return (
    <div className="bg-[#F7F7FB] w-[calc(100vw-280px)] p-9 h-[calc(100vh-80px)]">
      <Search />
      <div className="rounded-xl p-3 bg-white mt-4">
        <div className="font-bold text-xl ml-4 mt-2">Overview</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl p-4 flex flex-col">
            <div className="">
              Доставлено помощи
            </div>
            <div className="font-semibold text-3xl mt-2">124</div>
          </div>
          <div className="rounded-xl p-4 flex flex-col">
            <div className="">
              На сумму
            </div>
            <div className="font-semibold text-3xl mt-2">46541₸</div>
          </div>
          <div className="rounded-xl p-4 flex flex-col">
            <div className="">
              Получили помощь
            </div>
            <div className="font-semibold text-3xl mt-2">89 человек</div>
          </div>
          <div className="rounded-xl p-4 flex flex-col">
            <div className="">
              Ules points
            </div>
            <div className="font-semibold text-3xl mt-2">99999</div>
          </div>
        </div>
      </div>
    </div>
  )
}