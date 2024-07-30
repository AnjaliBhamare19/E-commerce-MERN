import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://anjali:anjali1903@cluster0.y3vk8lq.mongodb.net/MERN Project')
    .then(() => console.log("DB Connected"))
    .catch((error)=>console.log("DB not connected."));
}
//makes it easier to manage tasks that take time, like waiting for a response from an API. In Node. js, where it's common to handle many tasks simultaneously, async / await keeps our asynchronous code organized and more readable. 
// .then() = to handle the promise returned by mongoose.connect
// .catch() = to handle the error

