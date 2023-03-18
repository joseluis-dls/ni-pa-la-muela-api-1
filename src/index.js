import app from "./app"
import "./databases/databaseReviews"
import {PORT} from "./config"

app.listen(PORT);
console.log("Server on port: ", PORT);