import express from "express"
import cors from "cors" 
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json()) //get the request from the front end to backend that will be passed using the JSON
app.use(cors())

// Database Connection with express app
connectDB();

//API Endpoints
app.use("/api/food",foodRouter); //app.use(): This method is used to apply middleware functions or routers to your Express application.
//working- When a request is made to a path starting with /api/food, Express will check the routes defined in foodRouter.
//   For example, if a request is made to GET /api/food, it will match the route defined as foodRouter.get('/') in the foodRouter.
//Each route handler performs a specific operation (GET all foods, GET a food by ID, POST a new food, PUT to update a food, DELETE a food by ID).
app.use("/images",express.static('uploads'));



app.get("/",(req,res)=>{
    res.send("Hey API is Working !!!!")
}) //handle incoming GET requests to the root URL by responding with "API Working". 

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
}) //Starts the server and logs a message indicating the server is running and accessible at http://localhost:4000.
//-------------basic express server is created-----------------
 