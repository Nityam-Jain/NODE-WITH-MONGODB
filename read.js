
const dbconnect = require('./mongodb')
 const get = async ()=>{
    let data = await dbconnect();
    data = await data.find().toArray()
    console.log(data)
 }
 get();