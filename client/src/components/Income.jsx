import React, { useContext, useEffect } from 'react'
import Form from './Form'
import { UserAuth } from '../context/AuthContext.jsx'
import {AiFillCalendar, AiFillDelete, AiFillMoneyCollect} from 'react-icons/ai'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbPigMoney} from 'react-icons/tb'
import {BsCashCoin} from 'react-icons/bs'
import moment from 'moment'



function Income() {
  const {incomes,user,getIncome,deleteIncome,totalIncome} = UserAuth()

  const categoryIcon = (item)=>{
    switch(item){
      case 'salary':
        return <AiFillMoneyCollect size={35}/>
    case 'freelancing':
        return <GiReceiveMoney size={35}/>
      case 'cash':
        return <BsCashCoin size={35}/>
      default:
        return <TbPigMoney size={35}/>
    
    }
  }

  useEffect(() => {
    getIncome();
  },[user,incomes])
 
  
  
  return (

    <div className='flex gap-5 '>
        <div className='sm:w-[30%]  rounded-md '>
          <h1 className='text-black text-xl font-bold p-2 w-full'>Total Income is £{totalIncome()}</h1>
          <Form/>
        </div>
        <div className='flex-1 sm:flex flex-col gap-5 overflow-auto max-h-[700px] hidden'>
        {incomes.length > 0 ? incomes.map((item)=>
          <div className=' flex gap-2 bg-slate-700 rounded-md p-2 text-white items-center' key={item._id}>

            <div className=' bg-slate-400 rounded-md p-2 text-black'>
            {categoryIcon(item.category)}
            </div>
          
            <div className=' flex flex-col w-[100%] '>
               <div className=' font-bold text-xl  '>
                {item.title}
                </div>

               <div className=' flex gap-4 w-[100%]  '>
                  <div>
                      £{item.amount}
                  </div>
                  <div>
                       <span className=' flex gap-1'><AiFillCalendar/>{moment(item.date).format('DD/MM/YYYY')}</span>
                  </div>
                  
                  <div className=' capitalize'>
                     {item.category}
                  </div>
                  
                  <div>
                     {item.description}
                  </div>
                  <div className='grow text-end flex justify-end '>
                    <div className=' cursor-pointer mr-5'>
                     <AiFillDelete size={25} onClick={()=>deleteIncome(item._id)}/>
                    </div>
                    
                  </div>
                
               </div>

            <div>
              
              
            </div>

            </div>
            
          </div>
          
          
          
          ): <p className='text-center text-black font-bold'>...Checking Data</p>}
        </div>
      
      
    </div>
  )
}

export default Income