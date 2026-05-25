import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'


const port = process.env.PORT || 4000


dotenv.config()
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json())

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