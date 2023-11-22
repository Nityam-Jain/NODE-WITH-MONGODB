const express =require ('express')
const router = express.Router()
const userModel = require('../model/schema')

router.get('/read', async(req,resp)=>{
    let data = await userModel.find({});
    resp.send(data)
})
module.exports = router;