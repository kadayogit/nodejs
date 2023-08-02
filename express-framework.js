const  express = require("express");
const app = express();

app.get("/",(req, res)=>{
res.send("Hello home page from express framework in nodejs!");
});

app.get("/about",(req, res)=>{
 res.send("Welcome to about page from express framework in nodejs!");
});


app.listen(8000);