const dbConnection = require('./mongodb');

//create update function
const updateData = async () => {
    let data = await dbConnection();

    //create update query
    let result = await data.updateOne(
        {name:"dell"},{$set:{name:"Lenovo", brand:"thinkpad", price:1300, category:"computer"}});

    console.log(result);
}
//call updateData function
updateData();