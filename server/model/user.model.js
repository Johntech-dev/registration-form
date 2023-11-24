import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phoneumber: {
        type: int,
        require: true,
        unique: true,
    }
},{timestamps: true})

const user = mongoose.model('User', userSchema)

export default user;


import mongoose from "mongoose";