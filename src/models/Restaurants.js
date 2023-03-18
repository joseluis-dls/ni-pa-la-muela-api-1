import {Schema, model} from 'mongoose';

const restaurantSchema = new Schema({
    nameRestaurant: {
        type:String,
        required: true,
        unique: true,
    },
    descriptionRestaurant: {
        type:String,
        required: true,
    },
    shortDescriptionRestaurant: {
        type:String,
        required: true,
    },
    photoOfRestaurant: {
        type:String,
        required: true,
    },
    calificationOfRestaurant: {
        type:String,
        required: true,
    },
    linkResenas:{
        type:String,
        required: true,
        unique: true
    }
});

export default  model("Restaurant", restaurantSchema)