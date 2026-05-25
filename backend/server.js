import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
const port = process.env.PORT || 4000

import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config()
const app = express()
app.use(cors())
connectDB()


app.use("/api/auth",authRoutes)
app.get('/api/test',(req,res)=>{
    res.send({
        message: "Hello World!",

    })
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})