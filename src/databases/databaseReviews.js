import {connect} from "mongoose";
import {MONGODB_URI} from "../config"
import "../models/Review"

(async()=>{
    try{
        const db = await connect(MONGODB_URI,{ 
            useNewUrlParser: true,
            useUnifiedTopology:true    
        });
        console.log("Se ha conectado a la base de datos: ", MONGODB_URI)
        // console.log("Db connected to", db.connection.name);
    }catch(e){
        console.log(e)
    }
})()


