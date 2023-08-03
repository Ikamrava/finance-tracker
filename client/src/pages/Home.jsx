import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Income from '../components/Income'
import Expense from '../components/Expense'
import Navigation from '../components/Navigation'



function Home() {
  const [active,setActive] = useState(1)

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Income />
      case 3: 
        return <Expense />
    
    }
  }


  return (
    <div className=' sm:flex max-h-full text-gray-800 font-mono gap-2'>
    <div className='md:w-[20%] bg-slate-500 rounded-md  '>
      <Navigation active={active} setActive={setActive} />
    </div>
      <main className=' bg-slate-400 md:w-[80%] p-5 rounded-md  text-gray-800 font-mono  md:flex-col gap-5  '>
        {displayData()}
      </main>
    </div>
  )
}

export default Home