import {Router} from "express"
import {renderIndex, 
        addReview,
        renderReviews,
        renderEditReview,
        editReview,
        deleteReview} from "../controllers/reviews.controllers"

const router = Router();

router.get("/", renderIndex);

router.post('/review/add', addReview);

router.get("/reviews/view", renderReviews);

router.get("/edit/:id", renderEditReview);

router.post("/edit/:id", editReview)

router.get("/delete/:id", deleteReview)

export default router;