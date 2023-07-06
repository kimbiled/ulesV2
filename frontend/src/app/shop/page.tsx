"use client"
import Header from '@components/Header/Header'
import Navbar from '@components/Header/Navbar'
import Menu from './menu.tsx'
import Profile from './profile.tsx'
import Statistics from './statistics.tsx'
import Orders from './orders.tsx'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { useState } from 'react'
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function Shop() {
  const [page, setPage] = useState(1)

  function changePage(newPage: number) {
    setPage(newPage)
  }

  return (
    <>
      <Navbar />
      <div className={"flex h-[calc(100vh-80px)]" + pjs.className}>
        <Menu setPage={changePage} />
        {
          page === 1 ? <Profile /> :
          page === 2 ? <Statistics /> :
          page === 3 ? <Orders /> : null
        }
      </div>
    </>
  )
}