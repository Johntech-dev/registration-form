import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to mongodb");
}).catch((err) => {
    console.log("failed to connect to mongodb");
})

const app = express();


app.listen(5000, () => {
    console.log("server is running at port 5000");
})