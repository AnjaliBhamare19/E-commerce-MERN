//set up a router in Express for handling food-related routes, you can use express.Router().
//helps organize your route handling code by grouping routes that share a common base path.

import express from "express"
import {addfood, listfood, removefood}  from "../controllers/foodController.js"
import multer from "multer" //create image store system

const foodRouter = express.Router("/add",addfood); //Initializes a new router instance.

//---------Image Storage Logic---------------Configure multer for file uploads
const storage = multer.diskStorage({
    destination:"uploads",
    filename: (req, file, cb) => {
       return cb(null, `${Date.now()}-${file.originalname}`);
    }
})//apply validation for png and jpeg

const upload = multer({ storage: storage });

/// POST a new food with an image
foodRouter.post("/add",upload.single("image"),addfood)
//use post method to send the data on server and on the server our data will be processed and after that we will get response. 
foodRouter.get("/list",listfood);
foodRouter.delete("/remove",removefood);
export default foodRouter;

