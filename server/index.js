// import dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import db from './db.js'
import router from './routes/transactions.js'





dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())

const apiRoot = "/api";



app.use(apiRoot, router);




const port = process.env.PORT || 3001


app.listen(port, () => {
  db()
  console.log(`Server is running on port ${port}`);
});