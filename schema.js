const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/e-comm")
const userschema = mongoose.Schema({
    name: String,
    Size: String,
    color: String
});
module.exports = mongoose.model("products",userschema)