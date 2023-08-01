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
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    }
]

function Navigation({active, setActive}) {
  return (
    <div >
           <div className="user-con">
                
              
            </div>
            <ul className="menu-items cursor-pointer text-white">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? ' bg-black pl-5 py-2 ': 'pl-5 py-2'}
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