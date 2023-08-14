import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import ChartReact from './ChartReact'




function Dashboard() {
  const {totalIncome,totalExpense,getIncome,getExpense,incomes,expenses} = UserAuth()
  useEffect(() => {
    getIncome()
    getExpense()
  },[])

  const initialValue = 0;

  const  halifaxCurrentIncomeamount = incomes?.filter(item => item.source === 'halifax').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const  halifaxCurrentExpenseamount = expenses?.filter(item => item.source === 'halifax').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  console.log(halifaxCurrentIncomeamount)
  console.log(halifaxCurrentExpenseamount)
  const halifaxCurrentBalance = halifaxCurrentIncomeamount - halifaxCurrentExpenseamount

  const  nationCurrentIncomeamount = incomes?.filter(item => item.source === 'nationWide').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const  nationCurrentExpenseamount = expenses?.filter(item => item.source === 'nationWide').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const nationCurrentBalance = nationCurrentIncomeamount - nationCurrentExpenseamount


  const  halifaxCredittIncomeamount = incomes?.filter(item => item.source === 'halifax-credit').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const  halifaxCredittExpenseamount = expenses?.filter(item => item.source === 'halifax-credit').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const halifaxCreditBalance = halifaxCredittIncomeamount - halifaxCredittExpenseamount

  const  nationCredittExpenseamount = expenses?.filter(item => item.source === 'nationwide-credit').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const  nationcreditIncomeamount = incomes?.filter(item => item.source === 'nationwide-credit').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const nationcreditExpense = nationcreditIncomeamount - nationCredittExpenseamount

  const  expensecash = expenses?.filter(item => item.source === 'cash').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const  incomecash = incomes?.filter(item => item.source === 'cash').map((item) => item.amount).reduce((previousValue, currentValue) => previousValue + currentValue, initialValue)
  const cashBalance = incomecash - expensecash


  return (
    <div>
      <ChartReact/>
      <h2 className='mt-4 font-bold'>Halifax Saving Balance: £{halifaxCurrentBalance}</h2>
      <h2 className='mt-4 font-bold'>Nationwide Saving Balance: £{nationCurrentBalance}</h2>
      <h2 className='mt-4 font-bold'>Halifax Credit Card Balance: £{halifaxCreditBalance}</h2>
      <h2 className='mt-4 font-bold'>Nationwide Credit Card Balance: £{nationcreditExpense}</h2>
      <h2 className='mt-4 font-bold'>Cash: £{cashBalance}</h2>
      <h2 className='mt-4 font-bold'>Total Income: £{totalIncome()}</h2>
      <h2 className='mt-4 font-bold'>Total Expense: £{totalExpense()}</h2>
      <h2 className='mt-4 font-bold'>Balance: £{totalIncome()-totalExpense()}</h2>
  
    </div>
  )
}

export default Dashboard