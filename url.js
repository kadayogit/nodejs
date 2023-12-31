const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "public");

//index page
app.get("/", (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get("/home", (_, res) => {
    res.sendFile(`${publicPath}/home.html`);
});

app.set('view engine', 'ejs');

app.get("/about", (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
});
//create dynamic content
const user = {
    name: "guled",
    email: "admin@admin.com",
    skills:['php', 'java','c++','nodejs', 'js','DB']
}
app.get("/profile",(_,res)=>{
    res.render("profile",{user});
});

//login route
app.get("/login", (_,res)=>{
res.render("login");
});

app.get("/*", (_, res) => {
    res.sendFile(`${publicPath}/error.html`);
});

app.listen(4000);