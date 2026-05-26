import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.route.js'


const port = process.env.PORT || 4000


const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

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