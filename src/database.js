import {connect} from "mongoose";

(async()=>{
    try{
        const db = await connect("mongodb://127.0.0.1:27017/crud-restaurantes");
        console.log("Db connected to", db.connection.name);
    }catch(e){
        console.log(e)
    }
})()

