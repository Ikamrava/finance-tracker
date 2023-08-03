import React, { useContext, useEffect } from 'react'
import Form from './Form'
import { UserAuth } from '../context/AuthContext.jsx'
import {AiFillDelete, AiFillMoneyCollect} from 'react-icons/ai'
import {GiReceiveMoney} from 'react-icons/gi'
import {TbPigMoney} from 'react-icons/tb'
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
        return <FaMoneyBill1Wave size={35}/>
      default:
        return <TbPigMoney size={35}/>
    
    }
  }

  useEffect(() => {
    getIncome();
  },[user,incomes])
 
  
  
  return (

    <div className='flex gap-5 '>
        <div className='w-[30%]  rounded-md '>
          <h1 className='text-black text-2xl font-bold p-2'>Total Income is £{totalIncome()}</h1>
          <Form/>
        </div>
        <div className='flex-1 flex flex-col gap-5 overflow-auto max-h-[700px]'>
        {incomes.length>0 && incomes.map((item)=>
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
                      {item.amount}
                  </div>
                  <div>
                      {moment(item.date).format('DD/MM/YYYY')}
                  </div>
                  
                  <div>
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
          
          
          
          )}
        </div>
      
      
    </div>
  )
}

export default Income