const dbConnection = require('./mongodb');
const express = require('express');
const app = express();
//create req and res route
app.get('/', async(req, res) => {
    //get data from mongodb
    let data = await dbConnection();
    let result = await data.find({}).toArray();

    res.send(result);
});

app.post('/', async(req, res) => {
    //get data from mongodb
    let data = await dbConnection();
    let result = await data.insertOne({});

    res.send(result);
});
app.listen(5000);