// routes.js
import { Router } from "express";
import  {addIncome,getIncome}  from "../controlers/income.js";




const router = Router(); 

// Root route for welcoming everyone
router.post("/add-income", addIncome )
router.get("/get-income", getIncome )



export default router;

