// we are creating the API using that we can add,display,remove food item in our database

import foodModel from '../models/foodModel.js';
import fs from 'fs'
//Node.js fs (File System) module, which provides an API for interacting with the file system. This module allows you to work with files and directories, enabling operations such as reading, writing, updating, deleting, and more.

//add food item
const addfood = async(req,res)=> {
   let imagePath = req.file ? `${req.file.filename}` : '';// Extracts the file path if an image is uploaded.
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

//all food list
const listfood = async(req,res) =>{
   try{
      const food = await foodModel.find({});
      res.json({success: true, data: food})
   }
   catch(error){
      console.log(error);
      res.json({success:false, message:"Error"})
   }
}

//remove item and its associated image file
const removefood = async(req,res) =>{
   try{
      const food = await foodModel.findById(req.body._id);
      if(!food){
         return res.json({success:false, message:"food item not found."})
      }
      fs.unlink(`uploads/${food.image}`,()=>{})
      await foodModel.findByIdAndDelete(req.body._id);
      res.json({success: true,message:"Item Remove Successfulyy :)"})
   }
   catch(error)
   {
      console.log(error);
      res.json({success:false, message:"Error while removing item"})
   }
}

//
export {addfood, listfood, removefood};