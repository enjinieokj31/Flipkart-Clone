require('dotenv').config();

const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/db.config');
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');
const productRoute = require('./routes/product');
const cookieParser = require('cookie-parser');
const { checkForAuthCookie } = require('./middlewares/authentication');

const app = express();

app.set('view engine','ejs');
app.use('/public',express.static(__dirname+"/public"))
app.use(express.static(path.resolve('./public')));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


const PORT = process.env.PORT || 5000;

app.get('/',checkForAuthCookie("token"), (req,res)=>{
    res.render('home', {user: req.user, message: null });
})

app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/product', productRoute);

app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`)
})