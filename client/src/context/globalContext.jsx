import { createContext, useContext } from "react";
import axios from "axios";
import { useState } from 'react';


const Base_Url = "https://localhost:5000/api/";

export const GlobalProvider = ({children}) => {

    const [incomes,setIncomes] = useState([]);
    const [expenses,setExpenses] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    const addIncome = async (income) => {
        setLoading(true);
        try {
            const response = await axios.post(Base_Url + "add-income",income);
            setIncomes([...incomes,response.data]);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    }


    return (
    <GlobalContext.Provider value={{addIncome}}>
        {children}
    </GlobalContext.Provider>
  )
}

export const GlobalContext = ()=>{
    return useContext(GlobalContext);

};


