
import { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import InForm from './InForm'
import { AiFillCalendar, AiFillDelete } from 'react-icons/ai'
import moment from 'moment'
import { BiSolidCastle } from 'react-icons/bi'
import { SlEnergy } from 'react-icons/sl'
import { BsFillHouseAddFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { BiSolidGasPump } from 'react-icons/bi'
import { BiSolidCarWash } from 'react-icons/bi'
import { FaSimCard } from 'react-icons/fa'
import { FaInternetExplorer } from 'react-icons/fa'
import { BsCartPlusFill } from 'react-icons/bs'
import { TbPigMoney } from 'react-icons/tb'








function Expense() {

  const {getExpense,deleteExpense,user,totalExpense,expenses} = UserAuth()


  const categoryIcon = (item)=>{
    switch(item){
      case 'council':
        return <BiSolidCastle size={35}/>
    case 'energy':
        return <SlEnergy size={35}/>
      case 'mortgage':
        return <BsFillHouseAddFill size={35}/>
        case 'car':
        return <AiFillCar size={35}/>
        case 'petrol':
        return <BiSolidGasPump size={35}/>
        case 'carinsurance':
        return <BiSolidCarWash size={35}/>
        case 'sim':
        return <FaSimCard size={35}/>
        case 'internet':
        return <FaInternetExplorer size={35}/>
        case 'grocery':
        return <BsCartPlusFill size={35}/>
      default:
        return <TbPigMoney size={35}/>
    
    }
  }

  // <option value="council">Council Bill</option>
  //                   <option value="energy">Energy Bill</option>
  //                   <option value="mortgage">Mortgage</option>
  //                   <option value="car">Car</option>
  //                   <option value="petrol">Petrol</option>
  //                   <option value="carinsurance">Car Insurance</option>
  //                   <option value="sim">Sim Card</option>
  //                   <option value="internet">Internet</option>
  //                   <option value="grocery">Grocery</option>

  useEffect(() => {
    getExpense();
  },[user,expenses])
 
  
  
  return (

    <div className='flex gap-5 '>
        <div className='sm:w-[30%]  rounded-md '>
          <h1 className='text-black text-2xl font-bold p-2'>Total Expense is £{totalExpense()}</h1>
          <InForm/>
        </div>
        <div className='flex-1 sm:flex flex-col gap-5 overflow-auto max-h-[700px] hidden'>
        {expenses.length > 0 ? 
          expenses.map((item)=>
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
                     <AiFillDelete size={25} onClick={()=>deleteExpense(item._id)}/>
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

export default Expense