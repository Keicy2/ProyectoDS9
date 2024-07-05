import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(" url aqui del mongo atlas o local ")
    }catch(e){
        console.log(e)
    }
}