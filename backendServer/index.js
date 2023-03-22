const express = require('express');
const {exec} = require('child_process');
const { stdout } = require('process');
const app = new express();
const port = 5000;

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index',{speed:" "})
})
app.get('/getspeedtest',(req,res)=>{
    exec(`fast --upload --json`,(err,stdout,stderr)=>{
        if(err){
            console.log("error from internet-speed test package")
            res.json({
                error: 'malfunction in speed test package',
                stderr
            })
        }
        console.log("printing the success result of internet speed test");
        res.json({
            report: stdout
        })
    })
})

app.listen(port, ()=>{
    console.log("Server is running on port 5000")
})