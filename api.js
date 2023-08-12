const dbConnection = require('./mongodb');
const express = require('express');
const app = express();
//create req and res route

//middleware
app.use(express.json());

//get api 
app.get('/', async(req, res) => {
    //get data from mongodb
    let data = await dbConnection();
    let result = await data.find({}).toArray();
    res.send(result);
});

//post api or insert data into the collection
app.post('/', async(req, res) => {
    //get data from mongodb
    let data = await dbConnection();
    let result = await data.insertOne(req.body);
    res.send(req.body);
    console.log(result);
});

//put api or update data into the collection
app.put("/", async (req, res)=>{
    let data = await dbConnection();
    let result = await data.updateOne({name:"mouse"},{$set:req.body});
    res.send({result});
});
app.listen(5000);