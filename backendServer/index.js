const express = require('express');

const app = new express();
const port = 5000;

app.get('/',(req,res)=>{
    res.status(200).send("hi i am working at 5000")
})
app.get('/home',(req,res)=>{
    res.status(200).send("home page")
})

app.listen(port, ()=>{
    console.log("App is running on port 5000")
})