// routes.js
import { Router } from "express";
import  {addIncome,deleteIncome,getIncome}  from "../controlers/income.js";
import { addExpense, deleteExpense, getExpense } from "../controlers/expense.js";




const router = Router(); 

// Root route for welcoming everyone
router.post("/add-income", addIncome )
router.get("/get-income/:userId", getIncome )
router.delete("/delete-income/:id",deleteIncome)

router.post("/add-expense", addExpense )
router.get("/get-expense/:userId", getExpense )
router.delete("/delete-expense/:id",deleteExpense)

router.get("/", (req, res) => {
    res.send("Hello World");
  })



export default router;

