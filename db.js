const { MongoClient } = require('mongodb');
const url="mongodb://127.0.0.1:27017";
const databaseName= "e-comm";
const client = new MongoClient(url);

//get data from mongodb database collection
async function getData() {

let result = await client.connect();

 db = result.db(databaseName);
 collection = db.collection('products');
 
 let data = await collection.find({}).toArray();
 console.warn(data);

}
//call the function
getData();