const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

const defaultRoute = require('./routes/default'); 
const postRoutes  = require('./routes/post');
const userRoutes  = require('./routes/user');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true}).then(()=>{ 
    console.log('database connected');
}).catch((err) =>{
    console.log(err)
})
mongoose.connection.on("Error",err =>{
    console.log(`database connection error ${err.message}`);
})

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());
//bringing routes
app.use('/',defaultRoute);
app.use('/',postRoutes);
app.use('/',userRoutes);
const port = process.env.PORT || 8080;
app.listen(port,()=> console.log(`A Node js API is listening on port ${port}`));