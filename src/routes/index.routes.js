import {Router} from "express"

import {renderReviewsIndex, 
        addReview,
        renderReviews,
        renderEditReview,
        editReview,
        deleteReview} from "../controllers/reviews.controllers"

import {renderIndexRestaurantsPage,
        addRestaurant,
        renderRestaurantList,
        renderEditRestaurant,
        editRestaurant,
        deleteRestaurant} from "../controllers/restaurants.controllers"

import {renderIndexContact,
        addContacts,
        renderContactsList,
        renderEditContact,
        editContact,
        deleteContact} from "../controllers/contacts.controllers"

import {renderIndex, 
        getRestaurantsApi,
        getReviewsApi,
        getContactsApi} from "../controllers/index.controllers"

const router = Router();

router.get("/", renderIndex);

router.get("/reviews", renderReviewsIndex);

router.post('/review/add', addReview);

router.get("/reviews/view", renderReviews);

router.get("/edit/:id", renderEditReview);

router.post("/edit/:id", editReview)

router.get("/delete/:id", deleteReview)

//Restaurants Routes

router.get("/restaurants", renderIndexRestaurantsPage)

router.post("/restaurants/add", addRestaurant)

router.get("/restaurants/view", renderRestaurantList)

router.get("/restaurants/edit/:id", renderEditRestaurant)

router.post("/restaurants/edit/:id", editRestaurant)

router.get("/restaurants/delete/:id", deleteRestaurant)

//Contacts Routes

router.get("/contacts", renderIndexContact)

router.post("/contacts/add", addContacts)

router.get("/contacts/views", renderContactsList)

router.get("/contacts/edit/:id", renderEditContact)

router.post("/contacts/edit/:id", editContact)

router.get("/contacts/delete/:id", deleteContact)

//Api route

router.get("/api/restaurants", getRestaurantsApi)

router.get("/api/reviews", getReviewsApi);

router.get("/api/contacts", getContactsApi);

export default router;