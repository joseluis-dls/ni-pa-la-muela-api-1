import {connect} from "mongoose";
import {MONGODB_URI} from "./config"

(async()=>{
    try{
        const db = await connect(MONGODB_URI,{ useNewUrlParser: true });
        console.log("Db connected to", db.connection.name);
    }catch(e){
        console.log(e)
    }
})()

