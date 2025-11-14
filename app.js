const express = require('express')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes.js')
require('dotenv').config()

const app = express();
app.use(express.json())

connectDB();
app.use('/api/users',userRoutes)
app.get('/',(req,res)=> res.send('Welcome to MVC+ Service layer API with Numeric IDs'))

module.exports = app