const express = require('express');
const router = express.Router();
const productModel = require('../model/schema');

router.put('/update/:Id', async (req, res) => {
  try {
    const productId = req.params.Id;
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      
         {
          name: req.body.name,
          size: req.body.size,
          brand: req.body.brand,
          color: req.body.color,
          price: req.body.price,
        },
      
    
      { new: true } // Return the updated document
    );
    

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    else{
        res.send({
            message: "Sucessfully Updated",
            data:  updatedProduct
         })
     }
   
  } catch (error) {
    console.error("Error Occurred", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

