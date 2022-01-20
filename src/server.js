const express = require('express');
const connectDB = require('../config/db');
const app = express();
connectDB();


app.get('/',(req,res)=>{
    res.status(200).json({msg:"Back-end Challenge 2021 🏅 - Space Flight News"});
});

app.listen(3000,()=>{
    console.log("start api space flight");
})