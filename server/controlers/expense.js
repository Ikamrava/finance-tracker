import ExpenseSchema from "../models/expenseModel.js";

export async function addExpense(req,res){
    const {userId,title,amount,date,category,description} = req.body;
    const expense = ExpenseSchema({
        title,
        amount,
        date,
        category,
        description,
        userId
    })
    console.log(expense)

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
            await expense.save();
            console.log("ello")
            res.status(200).json({
                message: "Expense added successfully"
            })
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getExpense(req,res){
    const {userId} = req.params;
    
    try {

        const expense = await ExpenseSchema.find({userId}).sort({createdAt:-1});
        res.status(200).json(expense);
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export async function deleteExpense(req,res){
    const {id} = req.params;
    console.log(id)
    try {
        await ExpenseSchema.findByIdAndDelete(id);
        res.status(200).json({
            message: "Expense deleted successfully"

        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }

}

