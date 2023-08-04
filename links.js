const express = require("express")
const app = express();

app.get("/",(req, res)=>{
res.send(
`<h3>Register form</h3>
<form>
<input type="text" name="test" placeholder="Enter name!" />
<button>Login</button>
</form>
<a href="/">Home page</a>
`
);
});

app.get("/api",(req,res)=>{
res.send([
    {
        name: "Guled",
        email: "admin@admin.com"
    },
    {
        name: 'Amina',
        email: 'admin@amina.com'
    }]
    );
});
app.listen(5000);
