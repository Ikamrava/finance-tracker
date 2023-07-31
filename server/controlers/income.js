import IncomeSchema from "../models/incomeModel.js";

export async function addIncome(req,res){
    const {title,amount,date,category,description} = req.body;
    const income = IncomeSchema({
        title,
        amount,
        date,
        category,
        description
    })
    console.log(income)

    try { 
        if (!title || !amount || !category) {
            res.status(400).json({
                message: "Incomplete data"
            })
        }  
        if(amount<=0 || !amount === "number"){
            res.status(400).json({
                message: "Amount should be posetive"
            })
        }
        else {
            await income.save();
            console.log("ello")
            res.status(200).json({
                message: "Income added successfully"
            })
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getIncome(req,res){
    try {
        const income = await IncomeSchema.find().sort({createdAt:-1});
        res.status(200).json(income);
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

