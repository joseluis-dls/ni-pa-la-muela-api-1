import Restaurant from "../models/Restaurants"
import Review from "../models/Review"
import Contacts from "../models/Contacts"

export const renderIndex = (req,res) => {
    res.render("index.hbs")
}

export const getRestaurantsApi = async(req,res) => {
    const restaurants = await Restaurant.find().lean()

    res.json(restaurants)
}

export const getReviewsApi = async(req,res)=>{
    const reviews = await Review.find().lean()
    res.json(reviews)
}

export const getContactsApi = async(req,res) => {
    const contacts = await Contacts.find().lean()

    res.json(contacts)
}