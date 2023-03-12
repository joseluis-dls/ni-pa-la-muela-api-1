import Review from "../models/Review"

export const renderIndex = (req,res)=>{
    res.render("index.hbs")
}

export const renderReviews = async(req,res)=>{
    const reviews  = await Review.find().lean();

    res.render("reviewsList", {reviews: reviews})
}

export const renderEditReview = async(req,res)=>{
    try{
        const review = await Review.findById(req.params.id).lean()
    
        res.render("editReview" , {review})
    }catch(e){
        console.log(e)
    }
    
} 

export const addReview = async (req,res) =>{
    try{
        const review = Review(req.body)

        const reviewSaved = await review.save()
        res.redirect("/reviews/view");
    }catch(e){
        console.log(e)
    }
}

export const editReview = async(req,res) => {
    const {id} = req.params

    await Review.findByIdAndUpdate(id, req.body)

    res.redirect("/reviews/view")
}

export const deleteReview = async(req,res)=>{
    const {id} = req.params

    await Review.findByIdAndDelete(id)

    res.redirect("/reviews/view")
}