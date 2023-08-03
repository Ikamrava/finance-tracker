import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import ChartReact from './ChartReact'




function Dashboard() {
  const {totalIncome,totalExpense} = UserAuth()
  



  return (
    <div>
      <ChartReact/>
      <h2 className='mt-4 font-bold'>Total Income: £{totalIncome()}</h2>
      <h2 className='mt-4 font-bold'>Total Expense: £{totalExpense()}</h2>
      <h2 className='mt-4 font-bold'>Balance: £{totalIncome()-totalExpense()}</h2>
    </div>
  )
}

export default Dashboard