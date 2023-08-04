import { useState } from 'react';
import React, { useContext } from 'react'
import DatePicker from "react-datepicker";
import { UserAuth } from '../context/AuthContext'
import "react-datepicker/dist/react-datepicker.css"

function InForm() {

    const {addExpense,user,getExpense} = UserAuth()
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
        if(!title || !amount || !date || !category){
            return
        }
        if(!userId){
            return
        }
        addExpense(formData)
        setFormData({
            title: '',
            amount: '',
            date: '',
            category: '',
            description:"",
            userId: user.uid
        })
        getExpense()

    }
    

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col gap-5' autoComplete='off'>
        <input type="text" value={title} name= {title} placeholder='Title' onChange={handleInput("title")} className='p-2'/>
        <input type="amount" value={amount} name= {amount} placeholder='Amount' onChange={handleInput("amount")} className='p-2'/>
        <div>
            <DatePicker className='p-2' selected={date} id="date" placeholderText='Enter a Date'  dateFormat="dd/MM/yyyy"  onChange={(date)=>{
                setFormData({...formData, date: date})
            }} />
        </div>
        
        <select required value={category} className='p-2' name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="council">Council Bill</option>
                    <option value="energy">Energy Bill</option>
                    <option value="mortgage">Mortgage</option>
                    <option value="car">Car</option>
                    <option value="petrol">Petrol</option>
                    <option value="carinsurance">Car Insurance</option>
                    <option value="sim">Sim Card</option>
                    <option value="internet">Internet</option>
                    <option value="grocery">Grocery</option>
                    <option value="other">Other</option>
                    
        </select>
        
        <textarea className='p-2' type="text" value={description} name= {description} placeholder='Description' onChange={handleInput("description")}/>
        <button  className='bg-black pl-5 py-2 text-white'>Add Expense</button>
      
        

    </form>
  )
}

export default InForm