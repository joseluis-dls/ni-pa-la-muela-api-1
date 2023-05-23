import {config} from "dotenv"

config()

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test"
export const MONGODB_URI__RESTAURANTS = process.env.MONGODB_URI__RESTAURANTS || "mongodb://127.0.0.1:27017/test-restaurant"
export const PORT = process.env.PORT || 4000
