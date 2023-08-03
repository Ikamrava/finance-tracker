import { useState } from 'react';
import { useContext,createContext, useEffect } from "react";
import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import axios from "axios";
import {auth} from "../firebase"



const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user,setUser] = useState({})
  const [incomes,setIncomes] = useState([]);
  const [expenses,setExpenses] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [inResponse,setInResponse] = useState(null);
  
    
 const googleSingIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
 }

 const signOut = () => {
    auth.signOut()
 }

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
    });
    return ()=>{
      unsubscribe()
    };
  },[])

  const Base_Url = "https://localhost:5000/api/";

  const addIncome = async (income) => {
    
    setLoading(true);
    try {
      console.log(income)
        const response = await axios.post("http://localhost:5000/api/add-income",income);
        setLoading(false);
        setInResponse(response.data.message);
        console.log(response.data.message)
    } catch (error) {
        
        setLoading(false);
    }
}

const addExpense = async (expense) => {
    
  setLoading(true);
  try {

      const response = await axios.post("http://localhost:5000/api/add-expense",expense);
      
      setLoading(false);
      
      
  } catch (error) {
      
      setLoading(false);
  }
}

const getExpense = async () => {

  try {
   
    const response = await axios.get(`http://localhost:5000/api/get-expense/${user.uid}`);

    setExpenses(response.data);

  } catch (error) {
    
  }
}

const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/delete-expense/${id}`);
    getExpense();
  } catch (error) {
    console.log(error)
  }
}

const getIncome = async () => {

  try {
   
    const response = await axios.get(`http://localhost:5000/api/get-income/${user.uid}`);

    setIncomes(response.data);

  } catch (error) {
    
  }
}

const deleteIncome = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/api/delete-income/${id}`);
    getIncome();
  } catch (error) {
    console.log(error)
  }
}

const totalIncome = () => {
  let total = 0;
  incomes.forEach(income => {
    total += income.amount;
  });
  return total;
}

const totalExpense = () => {
  let total = 0;
  expenses.forEach(expense => {
    total += expense.amount;
  });
  return total;
}

useEffect(() => {
  getExpense();
},[user])
useEffect(() => {
  getIncome();
},[user])





  return (
    <AuthContext.Provider value={{googleSingIn,signOut,user,addIncome,inResponse,addExpense,incomes,getIncome,deleteIncome,totalIncome,expenses,addExpense,getExpense,deleteExpense,totalExpense}}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}