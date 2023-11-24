import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to mongodb");
}).catch((err) => {
    console.log("failed to connect to mongodb");
})

const app = express();

app.use(express.json())

app.listen(5000, () => {
    console.log("server is running at port 5000");
})

app.use('/server/auth', authRouter)