// require('dotenv').config({path : './env'})

import dotenv from "dotenv";

//more professional approach
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!! ", err);
  });

/* 
first approach 

import express from "express";
const app=express()

//effie ()()
( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
        console.log("Application not able to talk to database");
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })

  } catch (err) {
    console.error("ERROR : ", err);
    throw err;
  }
})();
*/
