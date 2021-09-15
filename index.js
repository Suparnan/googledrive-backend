const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { userController } = require('./controller/user.controller.js');

const app = express();
const PORT = process.env.PORT || 4210;
const connectDB = require('./config/db.js');
require('dotenv').config();

//DB connection
connectDB();

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}))

//Router Linking
app.use("/auth", require("./routes/auth.routes.js"));

//Server Connection
app.listen(PORT, () => {
    console.log("The express server started successfully  in the ",+PORT);
})