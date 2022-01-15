const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const User = require("./models//usermessage")
const app = express();


dotenv.config({path:"./config.env"});
require ("./db/conn");
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 8000;


app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.post("/contact", (req, res)=>{
    const userData = new User(req.body);
    userData.save().then(()=>{
        res.status(201).sendFile(path.join(__dirname, '../public', 'success.html'));
    }).catch((error)=>{
        res.status(400).sendFile(path.join(__dirname, '../public', 'error.html'))
        console.log(error)
    });
});
app.get('*', (req, res)=>{
    res.render('')
});

app.listen(port, ()=>{
    console.log(`server running at port ${port}`)
});
