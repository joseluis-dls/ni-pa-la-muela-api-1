import express from "express"
import indexRoutes from "./routes/index.routes"
import {create} from "express-handlebars"
import path from "path"
import morgan from "morgan"
import cors from "cors";

const app = express();

//Cors options
const corsOptions = {
    origin:"*",
    credentials: true,
    optionSuccessStatus: 200
}

app.set('views', path.join(__dirname, 'views') );

const exphbs = create({
    extname: '.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout:'main'
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}))
app.use(cors(corsOptions))

//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")))

export default app;