import Restaurant from "../models/Restaurants"

export const renderIndexRestaurantsPage = async (req,res) =>{
    res.render("restaurantIndex.hbs")
}

export const addRestaurant = async(req,res) => {
    try{
        const restaurant = Restaurant(req.body)
        const restaurantSaved = await restaurant.save()
        res.redirect("/restaurants/view")
    }catch(e){
        console.log(e)
    }
}

export const renderRestaurantList = async(req,res) => {
    const restaurant  = await Restaurant.find().lean();

    res.render("restaurantList", {restaurant: restaurant})
}

export const renderEditRestaurant = async(req,res) => {
    try{
        const restaurant = await Restaurant.findById(req.params.id).lean()

        res.render("editRestaurant", {restaurant})
    }catch(e){
        console.log(e)
    }
}

export const editRestaurant = async(req,res) => {
    try{
        const {id} = req.params

        await Restaurant.findByIdAndUpdate(id, req.body)
    
        res.redirect("/restaurants/view")
    }catch(e){
        console.log(e)
    }
}

export const deleteRestaurant = async(req,res)=>{
    try{
        const {id} = req.params
        await Restaurant.findByIdAndDelete(id, req.body)
        res.redirect("/restaurants/view")
    }catch(e){
        console.log(e)
    }
}