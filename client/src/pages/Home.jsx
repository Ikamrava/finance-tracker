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
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expense />
    
    }
  }


  return (
    <div className=' flex h-[90vh] text-gray-800 font-mono gap-2'>
    <div className='w-[30%] bg-slate-500 rounded-md '><Navigation active={active} setActive={setActive} /></div>
      <main className=' bg-slate-400 w-[70%] p-5 rounded-md  text-gray-800 font-mono  flex-col gap-5  '>
        {displayData()}
      </main>
    </div>
  )
}

export default Home