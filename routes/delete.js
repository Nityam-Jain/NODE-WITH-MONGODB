const express = require('express')
const router = express.Router()
const productModel = require('../model/schema')

router.delete('/delete/:id',async(req,res)=>{
    try{
     let productID =  req.params.id
     let remove = await productModel.findOneAndDelete({_id:productID})
     if(!remove){
        console.log("not removed")
      }
      else{
        console.log("removed")
      }
    }
    catch(error){
        console.log("Error Occured",error)
        res.status(500).send('Internal Server Error');
    }
      res.send(
        {
            message: "Sucessfully Deleted",
           
        }
        )
    })
module.exports = router;