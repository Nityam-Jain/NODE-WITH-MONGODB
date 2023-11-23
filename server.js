const express = require('express')
const mongoose = require('mongoose')
const readApi = require('./routes/read')
const createApi = require('./routes/create')
const deleteApi = require('./routes/delete')
const updateApi = require('./routes/update')
const { url } = require('inspector')
require('dotenv').config();

const app = express();
app.use(express.json());

// mongoose.connect(database)  
mongoose.connect(process.env.database_url)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);

  });
//Calling Apis
app.use('/api',readApi)
app.use('/api',createApi)
app.use('/api',deleteApi)
app.use('/api',updateApi)

PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Port is running ${PORT}`)
})