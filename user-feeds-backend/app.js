
require("dotenv").config();
const express = require('express');
const port=8000
const route = require('./Routers/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require("mongoose")
const app = express();
const path = require('path');
app.use('/feeds/images/',express.static(path.join(__dirname, 'myNewDirectory')));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



app.use('/apis', route);

var url= `mongodb://localhost:27017/users-feed-app`
mongoose.connect(url,()=>{
    console.log("Database is successfully connected")
})
app.get('', (req, res) => {
    
    debugger;
});
app.listen(8000,()=>{
    console.log(`app is run successfully ${port}`);
})

module.exports = app;
