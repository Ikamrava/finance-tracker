import React from 'react'
import {dashboard, expenses, transactions, trend} from '../utils/icon'
const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    
    {
        id: 2,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    }
]

function Navigation({active, setActive}) {
  return (
    <div >
          
            <ul className="flex cursor-pointer text-white md:block items-center justify-evenly">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? ' bg-black md:pl-5 md:py-2 ': 'md:pl-5 md:py-2'}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
           
    </div>
    

  )
}

export default Navigation