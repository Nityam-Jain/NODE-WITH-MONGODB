const express = require('express')
const router = express.Router()
const productModel = require('../model/schema')

router.post('/create', async (req, res) => {
  try {
    const fields = { 
            name,
            size,
            brand,
            color,
            price 
          } = req.body;

    if (!name || !size || !brand || !color || !price)  {
      return res.status(400).send('Please provide all fiels with data');
    }

     const createdProduct = await productModel.create({
      name,
      size,
      brand,
      color,
      price,
    });

    res.send(createdProduct);
  } catch (error) {
    console.error("Error Occurred", error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;