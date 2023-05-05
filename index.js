const express = require('express');
const mongoose = require('mongoose');
const route = require('./scewfcfw/routes/route');
const socket = require('socket.io');
require('dotenv').config()
const multer = require('multer')
const jwt=require("jsonwebtoken")
const app = express()
const cors=require("cors")
mongoose.set('strictQuery', false);
app.use(cors())
const Leads=require("./scewfcfw/models/leadsModel")
const cookieParser=require("cookie-parser")
app.use(express.json());
app.use(cookieParser())
app.use(multer().any())


const connection_url = process.env.MONGO_URL
const PORT = process.env.PORT || 4000;

mongoose.connect(connection_url, {
    useNewUrlParser:true
})
.then(()=> console.log("Database is connected"))
.catch((err)=> console.log(err))



app.use('/', route);
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/hello",(req,res)=>{
    res.send("hello")
})

const server = app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})

