const  express = require("express");
const app = express();

app.get("/",(req, res)=>{
    //how to get value from browser url as a parameter
    
res.send("Hello home page from express framework in nodejs!"+ req.query.name);
});

app.get("/about",(req, res)=>{
 res.send("Welcome to about page from express framework in nodejs!");
});

//not found page url
app.get("/*",(req, res)=>{
res.send("404 found the page!");
});

app.listen(8000);