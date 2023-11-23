const express = require('express')
const router = express.Router()
const productModel = require('../model/schema')
const { log } = require('console')

router.post('/create', async (req, res) => {
  try {
    const createdProduct = await productModel.create({
      name: "Shorts",
      size: "L",
      brand: "Fastrack",
      color: "Red",
      price: 599,
    })
    res.send(createdProduct)
  }
  catch (error) {
    console.log("Error Occured", error)
    res.status(500).send('Internal Server Error');
     }
})
module.exports = router;