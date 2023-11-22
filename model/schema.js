const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/e-comm") //connect to database

const ProductSchema = mongoose.Schema({
    name: String,
    Size: String,
    Brand: String,
    Color: String,
    Price: Number
})
module.exports = mongoose.model("products",ProductSchema)
