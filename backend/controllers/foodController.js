// we are creating the API using that we can add the new food item in our database

import foodModel from '../models/foodModel.js';
import fs from 'fs'
//Node.js fs (File System) module, which provides an API for interacting with the file system. This module allows you to work with files and directories, enabling operations such as reading, writing, updating, deleting, and more.

//add food item
const addfood = async(req,res)=> {

   let imagePath = req.file ? `/uploads/${req.file.filename}` : '';// Extracts the file path if an image is uploaded.
   const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: imagePath
   });  // Creates a new instance of the foodModel with the provided data.
   try{
      await food.save(); // Saves the new food item to the database.
      res.json({success: true,message: " Food Added"})
   }catch(error){
      console.log(error);
      res.json({success: false,message: "Error"});
   }
}

export default addfood;