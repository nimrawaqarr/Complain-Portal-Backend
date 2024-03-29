import mongoose from "mongoose";

const Connection = async() =>{
    const URL = 'mongodb://127.0.0.1:27017/crud-app';
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully");
    }catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;

{/*
const mongoose = require('mongoose');
const mongooseURI = "mongodb://127.0.0.1:27017/RozeeJobs";

const connectToMongo = () =>{
    mongoose.connect(mongooseURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;
*/}