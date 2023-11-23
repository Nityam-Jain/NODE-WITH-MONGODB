const express =require ('express')
const router = express.Router()
const productModel = require('../model/schema')

router.get('/read', async(req,res)=>{
    try{
    let data = await productModel.find();
    res.send(data)
    }
    catch(error){
        console.log("Error Occured",error)
        res.status(500).send('Internal Server Error');
    }
})
module.exports = router;