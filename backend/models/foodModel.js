// we are creating the model so that we can store the food in databae
import mongoose from "mongoose";

const { Schema, model } = mongoose; //Destructure Schema and model from mongoose object


//------------Schema-------------
//defines the structure of documents within a MongoDB collection.
//types, default values, validation rules, and more. 
const foodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

//------------Model-------------
//It provides an interface for interacting with the database. 
//Models are responsible for creating, reading, updating, and deleting documents in the database. 

const foodModel = mongoose.models.food || new model("food",foodSchema);
//we can create above model only once, when we run this model it will create model again.
// to solve this one if food model is already there it will be used if it is not there it will create a new model
export default foodModel;