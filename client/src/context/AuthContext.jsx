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
 const SessionExpirationTime = 30 * 60 * 1000;
 let logoutTimeout;

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)

      // clearTimeout(logoutTimeout);
      // logoutTimeout = setTimeout(handleLogout, SessionExpirationTime);
    });
    return ()=>{
      unsubscribe()
      // clearTimeout(logoutTimeout);
    };
  },[])

  const Base_Url = "https://finance-tracker-bz2b.onrender.com/api/";

  const addIncome = async (income) => {
    
    setLoading(true);
    try {
      console.log(income)
        const response = await axios.post(Base_Url + "add-income",income);
        setLoading(false);
        getIncome();
       
    } catch (error) {
        
        setLoading(false);
    }
}

const addExpense = async (expense) => {
    
  setLoading(true);
  try {

      const response = await axios.post(Base_Url + "add-expense",expense);
      
      setLoading(false);
      getExpense();
      
      
  } catch (error) {
      
      setLoading(false);
  }
}

const getExpense = async () => {

  try {
   
    const response = await axios.get(Base_Url + `get-expense/${user.uid}`);

    setExpenses(response.data);

  } catch (error) {
    
  }
}

const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(Base_Url + `delete-expense/${id}`);
    getExpense();
  } catch (error) {
    console.log(error)
  }
}

const getIncome = async () => {
 
  try {
    const response = await axios.get(Base_Url + `get-income/${user.uid}`);
    setIncomes(response.data);
    setLoading(false)

  } catch (error) {
    console.log(error)
  }
}

const deleteIncome = async (id) => {
  try {
    const response = await axios.delete(Base_Url + `delete-income/${id}`);
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







  return (
    <AuthContext.Provider value={{loading,googleSingIn,signOut,user,addIncome,inResponse,incomes,getIncome,deleteIncome,totalIncome,expenses,addExpense,getExpense,deleteExpense,totalExpense}}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}