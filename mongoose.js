const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
//create schema outside of the function to access everywhere
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveDB = async ()=> {
    //await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    //create model
    const Product = mongoose.model('products', productSchema);
    let data = new Product({name: "Note 10", price:1200, brand:"samsung", category:"mobile"});
    const result = await data.save();
    console.log(result);
}
//call the function
saveDB();

const displayDB = async () => {
 //await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
 const Product = mongoose.model('products', productSchema);
 let data = await Product.find({});
 console.log(data);
}
displayDB();

const updateDB = async () => {
    //await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    const Product = mongoose.model('products', productSchema);
    let data = await Product.updateOne({name: "Note 7"},{$set:{name:"Note 8 pro"}});
    console.log(data);
   }
   //updateDB();

   const deleteDB = async () => {
    //await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name: "Note 10"});
    console.log(data);
   }
   //deleteDB();