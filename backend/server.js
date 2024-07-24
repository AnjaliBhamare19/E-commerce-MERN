import express from "express"
import cors from "cors" 

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json()) //get the request from the front end to backend that will be passed using the JSON
app.use(cors())