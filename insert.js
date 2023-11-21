const dbconnect = require('./mongodb')
const schemadata = require('./schema')
const deposit = async () => {
    try {
        let db = await dbconnect();
        // console.log(db) //db connecting
         let result = await db.products.insert({
            name: "Shorts",
            Size: "S",
            color: "Blue",
            
        });
        console.log(result);
    } 
    catch (error) 
    {
        console.error("Error in deposit function:", error);
    }
};
deposit();
