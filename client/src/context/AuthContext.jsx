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
  const [exResponse,setExResponse] = useState(null);
    
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
      setExResponse(response.data.message);
      
  } catch (error) {
      
      setLoading(false);
  }
}

const getIncome = async () => {

  try {
   
    const response = await axios.get(`http://localhost:5000/api/get-income/${user.uid}`);

    setIncomes(response.data);

  } catch (error) {
    
  }
}

useEffect(() => {
  getIncome();
},[user])



  return (
    <AuthContext.Provider value={{googleSingIn,signOut,user,addIncome,inResponse,addExpense,incomes}}>
      {children}
    </AuthContext.Provider>
  );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}