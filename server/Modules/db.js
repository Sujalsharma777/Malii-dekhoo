const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONOGOURL)
        console.log("Mongodb Connected Success")
    }catch(error){
        console.log(    "Mongodb Connected Error ",error)
        
    }
}
module.exports= connectDB;