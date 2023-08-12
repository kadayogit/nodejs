const dbConnection = require('./mongodb');

//create delete function
const deleteData = async () =>{
let data = await dbConnection();

//create delete query
let result = await data.deleteOne({name:"iphone 5"});
if(result.acknowledged){
    console.log("Data has been deleted!");
    console.log(result);
}
}
//call the function
deleteData();