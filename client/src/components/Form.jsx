import { useState } from 'react';
import React, { useContext } from 'react'
import DatePicker from "react-datepicker";
import { UserAuth } from '../context/AuthContext'
import "react-datepicker/dist/react-datepicker.css"

function Form() {

    const {addIncome,user,getIncome} = UserAuth()
    const [formData, setFormData] = React.useState({
        userId: user.uid,
        title: '',
        amount: '',
        date: '',
        category: '',
        description:"",
        source:""
    })

    const {title, amount, date, category, description,userId,source} = formData
 
    
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
        addIncome(formData)
        setFormData({
            title: '',
            amount: '',
            date: '',
            category: '',
            description:"",
            userId: user.uid,
            source:""
        })
        getIncome()
    }
    

  return (
    <form onSubmit={handleSubmit} className=' flex flex-col gap-5 w-full' autoComplete='off'>
        <input type="text" value={title} name= {title} placeholder='Title' onChange={handleInput("title")} className='p-2 w-full'/>
        <input type="amount" value={amount} name= {amount} placeholder='Amount' onChange={handleInput("amount")} className='p-2'/>
        <div>
            <DatePicker className='p-2' selected={date} id="date" placeholderText='Enter a Date'  dateFormat="dd/MM/yyyy"  onChange={(date)=>{
                setFormData({...formData, date: date})
            }} />
        </div>
        
        <select required value={category} className='p-2' name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="cash">Cash</option>
                    <option value="other">Other</option>
        </select>

        <select required value={source} className='p-2' name="source" id="source" onChange={handleInput('source')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="halifax">Halifax</option>
                    <option value="nationWide">NationWide</option>
                    <option value="cash">Cash</option>
                    <option value="halifax-credit">Halifax-Credit</option>
                    <option value="nationwide-credit">Nation-Credit</option>
                    <option value="other">Other</option>
        </select>
        
        <textarea className='p-2' type="text" value={description} name= {description} placeholder='Description' onChange={handleInput("description")}/>
        <button  className='bg-black pl-5 py-2 text-white'>Add Income</button>
      
        

    </form>
  )
}

export default Form