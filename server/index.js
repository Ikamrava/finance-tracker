// import dotenv from 'dotenv'

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import db from './db/db.js'
dotenv.config();

const app = express()

app.use(cors())
app.use(express.json())



const port = process.env.PORT || 3001


const server = () => {
  db()
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  })
}

server()