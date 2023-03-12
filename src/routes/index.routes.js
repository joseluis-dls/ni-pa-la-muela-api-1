import {Router} from "express"
import Review from "../models/Review"

const router = Router();

router.get("/", (req,res)=>{
    res.render("index.hbs")
});

router.post('/review/add', async (req,res) =>{
    try{
        const review = Review(req.body)

        const reviewSaved = await review.save()
        res.redirect("/reviews/view");
    }catch(e){
        console.log(e)
    }
    
});

router.get("/reviews/view", async(req,res)=>{
    const reviews  = await Review.find().lean();

    res.render("reviewsList", {reviews: reviews})
})

router.get("/edit/:id", async(req,res)=>{
    try{
        const review = await Review.findById(req.params.id).lean()
    
        res.render("editReview" , {review})
    }catch(e){
        console.log(e)
    }
    
})

router.get("/about", (req,res)=>{
    res.render("about.hbs")
});

router.post("/edit/:id", async(req,res) => {
    const {id} = req.params

    await Review.findByIdAndUpdate(id, req.body)

    res.redirect("/reviews/view")
})

router.get("/delete/:id", async(req,res)=>{
    const {id} = req.params

    await Review.findByIdAndDelete(id)

    res.redirect("/reviews/view")
})

export default router;