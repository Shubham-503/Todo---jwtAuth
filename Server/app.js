require('dotenv').config()
const express = require('express')
var cors = require('cors')
var cookieParser = require('cookie-parser')

const app = express()

const connectToDB = require('./config/db')
const todoRoutes = require('./routes/todoRoutes')

//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/',todoRoutes)
//Db connection
connectToDB()


module.exports = app;
