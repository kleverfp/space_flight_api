const express = require('express');
const connectDB = require('../config/db');
const app = express();
connectDB();


app.use(express.json({extended:false}));
app.use('/',require('./routes/article'));

app.listen(3000,()=>{
    console.log("start api space flight");
})