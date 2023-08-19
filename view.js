const express = require('express');
require('./config');
const Product = require('./product');

const app = express();

app.use(express.json());

//create get mothed route
app.get("/view", async (req, res)=>{
    let data = await Product.find({});
    res.send(data);
});

//create post method route
app.post('/create', async (req, res)=>{
    let data = Product(req.body);
    const result = await data.save();
    res.send(result);
});

//create update method route
app.put('/update/:_id',async (req, res)=>{
 let data = await Product.updateOne(req.params, {$set: req.body});
    res.send(data);
});

app.delete("/delete/:_id", async (req, res)=>{
 let data = await Product.deleteOne(req.params);
 res.send(data);
});

app.listen(5000);