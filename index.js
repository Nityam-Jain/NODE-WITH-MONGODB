const express = require('express')
const mongoose = require('mongoose')
const readApi = require('./routes/Read')
const createApi = require('./routes/Create')

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/e-comm")  //connect to db



//Calling Apis
app.use('/api',readApi)
app.use('/api',createApi)
app.listen(3000,()=>{
    console.log("port is running")
})