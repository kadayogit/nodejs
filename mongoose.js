const mongoose = require('mongoose');

const main = async ()=> {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    const productSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    //create model
    const Product = mongoose.model('products', productSchema);
    let data = new Product({name: "Note 7", price:200});
    const result = await data.save();
    console.log(result);
}

//call the function
main();