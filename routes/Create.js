const express = require('express')
const router = express.Router()
const productModel = require('../model/schema')

router.post('/create', async(req,resp)=>{
  const createdProduct = await productModel.create({
    name: "Shorts",
    Size: "L",
    Brand: "Fastrack",
    Color: "Red",
    Price: 599,
  }) 
  resp.send(createdProduct)
})
module.exports = router;