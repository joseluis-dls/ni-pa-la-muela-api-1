import {Schema, model} from 'mongoose';

const contactSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    github: {
        type:String,
        required: true 
    },
    linkedin: {
        type:String
    },
    ig:{
        type:String,
        required: true
    }
})

export default  model("Contact", contactSchema)
