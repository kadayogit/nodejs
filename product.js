const mongoose = require('mongoose');

//create schema
const ProductSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
});

//create model
module.exports = mongoose.model('products', ProductSchema);
