import {connect, createConnection} from "mongoose"
import {MONGODB_URI__RESTAURANTS} from "../config"

(async()=>{
    try{
        const db = await createConnection(MONGODB_URI__RESTAURANTS);
        console.log("Se ha conectado a ", MONGODB_URI__RESTAURANTS);
    }catch(e){
        console.log(e)
    }
})()
