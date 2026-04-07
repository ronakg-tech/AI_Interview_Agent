import mongoose from "mongoose";
import dotenv from "dotenv"; 
dotenv.config(); 
const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGOO_DB_URL)
        console.log("DATABASE CONNECTED ✅")
    }
    catch(error){
        console.log(`Database Erorr ${error}`); 

    }
}
export default connectDB