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

app.get("/about", (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get("/*", (_, res) => {
    res.sendFile(`${publicPath}/error.html`);
});

app.listen(4000);