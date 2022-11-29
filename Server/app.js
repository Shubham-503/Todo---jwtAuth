require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')

const connectToDB = require('./config/db')
const todoRoutes = require('./routes/todoRoutes')

//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',todoRoutes)

//Db connection
connectToDB()


module.exports = app;
