import Header from '@components/Header/Header'
import Menu from './menu.tsx'
import Profile from './profile.tsx'
import { Plus_Jakarta_Sans } from 'next/font/google'
const pjs = Plus_Jakarta_Sans({ subsets: ["latin"] });
export default function Shop() {
  return (
    <>
      <Header />
      {/**хвала тому кто придумал калк */}
      <div className={"flex h-[calc(100vh-80px)]" + pjs.className}>
        <Menu />
        <Profile />
      </div>  
    </>
  )
}