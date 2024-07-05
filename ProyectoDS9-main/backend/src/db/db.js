import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://root:root@cluster0.2ajykbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }catch(e){
        console.log(e)
    }
}