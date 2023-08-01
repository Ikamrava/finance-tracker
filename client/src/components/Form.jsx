import { useState } from 'react';
import React, { useContext } from 'react'
import DatePicker from "react-datepicker";
import { UserAuth } from '../context/AuthContext'
import "react-datepicker/dist/react-datepicker.css"

function Form() {

    const {addIncome,user} = UserAuth()

  

    
    const [formData, setFormData] = React.useState({
        userId: user.uid,
        title: '',
        amount: '',
        date: '',
        category: '',
        description:"",
    })

    const {title, amount, date, category, description,userId} = formData
 
    
    const handleInput = (name) => (e) => {
        setFormData({...formData, [name]: e.target.value})
    }

    const handleSubmit = (e) => {
    
        e.preventDefault()
        addIncome(formData)
    }

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col gap-5' autoComplete='off'>
        <input type="text" value={title} name= {title} placeholder='Title' onChange={handleInput("title")}/>
        <input type="amount" value={amount} name= {amount} placeholder='Amount' onChange={handleInput("amount")}/>
        <div>
            <DatePicker selected={date} id="date" placeholderText='Enter a Date'  dateFormat="dd/MM/yyyy"  onChange={(date)=>{
                setFormData({...formData, date: date})
            }} />
        </div>
        
        <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="cash">Cash</option>
                    <option value="other">Other</option>
                    
        </select>
        
        <input type="text" value={description} name= {description} placeholder='Description' onChange={handleInput("description")}/>
        <button  className='bg-black pl-5 py-2 text-white'>Add Income</button>

    </form>
  )
}

export default Form