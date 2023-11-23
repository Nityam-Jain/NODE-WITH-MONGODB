const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/e-comm") //connect to database

const ProductSchema = mongoose.Schema({
    name: String,
    size: String,
    brand: String,
    color: String,
    price: Number
})
module.exports = mongoose.model("products",ProductSchema)
