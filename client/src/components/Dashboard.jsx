import React, { useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

function Dashboard() {
  const {addIncome,user,inResponse,incomes} = UserAuth()
  console.log(incomes)
  



  return (
    <div>
      {incomes && incomes.map((income) => {
        return <div>{income.title}</div>
       })}
    </div>
  )
}

export default Dashboard