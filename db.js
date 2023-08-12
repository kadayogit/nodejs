//import dbconnection
const dbConnection = require('./mongodb');
//get data from mongodb database collection

const main = async ()=> {
    let data = await dbConnection();
    data = await data.find({}).toArray();
    console.log(data);
}

//call the function
main();