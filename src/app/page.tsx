"use client"

import { Header } from '@/app/components/Header'
import { ThemeProvider } from './context/ThemeContext'
import { ThemeButton } from './components/ThemeButton'
import { Projects } from './components/Projects'
import { MoveButtons } from './components/MoveButtons'
import { Contact } from './components/Contact'


const Page = () => {
  return(
    <ThemeProvider>
      <div className="flex flex-col items-center bg-slate-200 dark:bg-black w-full font-sono">
        <Header/>
        <MoveButtons/>
        <Projects/>
        <ThemeButton/>
        <Contact />
      </div>
    </ThemeProvider>
  )
}

export default Page