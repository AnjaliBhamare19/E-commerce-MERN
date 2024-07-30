import express from "express"
import cors from "cors" 
import { connectDB } from "./config/db.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json()) //get the request from the front end to backend that will be passed using the JSON
app.use(cors())

// Database Connection with express app
connectDB();

app.get("/",(req,res)=>{
    res.send("Hey API is Working !!!!")
}) //handle incoming GET requests to the root URL by responding with "API Working". 

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
}) //Starts the server and logs a message indicating the server is running and accessible at http://localhost:4000.
//-------------basic express server is created-----------------
 