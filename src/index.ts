require("dotenv").config();
import express,{Application,Request,Response,NextFunction} from 'express';
const app:Application = express();
const PORT:number = 8000;

//import routers
const uploatRouter = require("./RoutefileUpload");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use Routes
app.use("/",uploatRouter);

//Port Listening
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});