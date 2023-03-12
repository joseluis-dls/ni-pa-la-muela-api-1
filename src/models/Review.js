import {Schema, model} from 'mongoose';

const reviewSchema = new Schema({
    titleSaucer: {
        type:String,
        required: true,
        unique: true,
    },
    descriptionSaucer : {
        type:String,
        required: true,
    },
    restaurant:{
        type:String,
        required:true
    },
    photoOfSaucer: {
        type:String,
        required: true,
    },
    priceOfSaucer: {
        type:Number,
        required: true,
    },
    calificationSaucer: {
        type:String,
        required: true,
    }
},{
    timestamps: true,
    versionKey: false
})

export default model('Review', reviewSchema)