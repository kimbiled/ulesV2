'use client'

import React, { ReactElement, useState } from "react"

type Props = {
  children: ReactElement[]
}

const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  

  return (
    <>
      <div className="flex items-start space-x-10 mb-5 border-b-[2px] border-gray-300]">
        {
          children.map((item, index) => (
            <button className={`text-normal font-medium pb-2.5 ${selectedTab === index ? 'text-[#4F82B0] border-b-2 border-[#4F82B0]' : 'text-gray-400'} hover:text-[#4F82B0] hover:border-b-2 hover:border-[#4F82B0]`} key={index} onClick={() => setSelectedTab(index)}>{item.props.title || item.key}</button>
          ))
        }
      </div>
      {children[selectedTab]}
    </>
  //   <div className="flex items-start space-x-4 mb-5">
  //   <p className="text-normal active:text-blue-600 active:border-b-2 active:border-blue-600 text-gray-400">
  //     Профиль
  //   </p>
  //   <p className="text-normal active:text-blue-600 active:border-b-2 active:border-blue-600 text-gray-400">
  //     Расписание
  //   </p>
  //   <p className="text-normal active:text-blue-600 active:border-b-2 active:border-blue-600 text-gray-400">
  //     Отметка
  //   </p>
  // </div>
  )
}

export default Tabs