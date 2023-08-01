import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 20,
        default: 0,
    },
    type: {
        type: String,
        trim: true,
        maxLength: 20,
        default: "Expense"
    },
    date: {
        type: Date,
        required: true,
    },
    category:{
        type: String,
        required: true,
        trim: true,

    },
    description:{
        type: String,
        trim: true,
    }
},{timestamps:true})

        
export default mongoose.model("Expense", ExpenseSchema)