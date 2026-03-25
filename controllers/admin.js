
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

const secret_key = process.env.JWT_SECRET_KEY_ADMIN;

const adminLogin = (req,res)=>{
    res.render('admin');
}

const adminCheck = async (req,res)=>{
    const { name, password } = req.body;

    try{

        const user = await Admin.findOne({ name });
        if (!user) {
            return res.render('admin',{ message: 'Admin not found' });
        }

        const isPasswordValid = user.password;
        if (isPasswordValid !== password) {
          return res.render('admin', { message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, name: user.name },secret_key);
        res.cookie('token_admin', token).redirect('/admin');
 
    } catch (error){
        res.render("admin",{ message : error.message});
    }
   
}

const adminHome = (req,res)=>{
    res.render('admin_dash',{message: req.adminPayload.name});
}

module.exports = {
    adminLogin,
    adminCheck,
    adminHome,
}