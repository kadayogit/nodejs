const dbConnection = require('./mongodb');

const insertData = async ()=> {
    let data = await dbConnection();
    //create insert query
   let result = await data.insertMany(
    [
    {name:"iphone 7", brand:"apple", price:300, category:"mobile"},
    {name:"iphone 8 pro", brand:"apple", price:450, category:"mobile"},
    {name:"iphone max pro", brand:"apple", price:550, category:"mobile"},
    {name:"iphone 11 pro", brand:"apple", price:700, category:"mobile"},
    {name:"iphone 13 max", brand:"apple", price:1200, category:"mobile"}
    ]);

   if(result.acknowledged) {
    console.log("Data has been inserted!");
   }
}
//call the function
insertData();