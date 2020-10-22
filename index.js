const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("App started");
});
app.get("/aboutus",(req,res)=>{
    res.send("Welcome to about us.");
});

app.use("",(req,res)=>{
    res.send("Welcome to home");
});

app.listen(3000);
console.log("App started");