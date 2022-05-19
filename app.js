// getting dependencies
const express = require("express");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require('mongoose')

const app = express();

// getting the enviroment variables
const port = process.env.PORT || 9002;
mongo_uri = process.env.MONGO_URI;

// database connect and models

// custom middlewares
app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(express.json());
app.use(
     express.urlencoded({
          extended: false,
     })
);
app.use(cookieParser());
app.use(
     cors({
          origin: "*"
     })
);

// database connect and models
const connectDb = require('./connectDB/connectDB');
connectDb(mongo_uri);

//  Route paths
const signupRoute = require('./routes/signup')
const signinRoute = require('./routes/signin')
const courseRoute = require('./routes/course')
const tokenRoute = require('./routes/token')
const adminRoute = require('./routes/admin')
const postRoute = require('./routes/post')
const forget_passwordRoute = require('./routes/forget_password')

// getting Routes
app.use('/api/signup', signupRoute);
app.use('/api/signin', signinRoute);
app.use('/api/course', courseRoute);
app.use('/api/token', tokenRoute);
app.use('/api/admin', adminRoute);
app.use('/api/post', postRoute);
app.use('/api/forget_password', forget_passwordRoute);

// exporting the app.
module.exports = app;