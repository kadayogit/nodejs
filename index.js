const fs = require("fs");

const data = process.argv;

if(data[2]== "add"){
    fs.writeFileSync(data[2], data[3]);
}
else if(data[2]=="remove"){
    fs.unlinkSync(data[3]);
}
else {
    console.warn("Invalid data input!");
}