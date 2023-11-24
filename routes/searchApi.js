const express = require('express');
const router = express.Router()
const productModel = require('../model/schema')

router.get('/search/:key',async(req,res)=>{
   try{
   let productData = await productModel.find(
     {
      "$or":[
           {"name": {$regex:req.params.key}},
           {"size": {$regex:req.params.key}},
           {"brand": {$regex:req.params.key}},
           {"color": {$regex:req.params.key}},
          ]
     }
  )
  res.send(productData)
   }
   catch(error){
      console.error("Error Occurred", error);
       res.status(500).send('Internal Server Error');
   }
})
module.exports=router;