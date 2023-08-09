const express = require("express");
const app = express();
//create middleware filter condition
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("please provide your age!");
    }
    else if(req.query.age <18) {
        res.send("You are under age!");
    }
    else {
        next();
    }
}
//use filter
app.use(reqFilter);

app.get("/", (req, res) => {
    res.send("Welcome to home page!");
});

app.get("/users", (req, res) => {
    res.send("Welcome to users page!");
});

app.listen(5000);