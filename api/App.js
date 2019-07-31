const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const postRoutes  = require('./routes/post');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}).then(()=>{ 
    console.log('database connected');
})
mongoose.connection.on("Error",err =>{
    console.log(`database connection error ${err.message}`);
})

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
//bringing routes
app.use('/',postRoutes);

const port = process.env.PORT || 8080;
app.listen(port,()=> console.log(`A Node js API is listening on port ${port}`));