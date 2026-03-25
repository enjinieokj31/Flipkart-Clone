const User = require('../models/user');
const bcrypt = require('bcrypt');
const hashPassword = require('../services/hashPass');
const { createTokenForUser } = require('../services/authentication');

const signupUser = async (req,res)=>{
    const { fullName, email, password, phone } = req.body;
    try{
       
       const { hashedPassword, salt } = await hashPassword(password);

        const userExist = await User.findOne({email});

         if(userExist){
         return res.render('home',{ message: "user with this email already exists"})
         }

         await User.create({
            fullName,
            email,
            password: hashedPassword,   
            phone,
            salt,
        })
        return res.redirect('/');

    } catch (error) {
        res.render('home', { message: error.message });
      }
}


const loginUser = async (req,res)=>{
    const { email, password } = req.body;
    try{

        const user = await User.findOne({ email });
        if (!user) {
            return res.render('home',{ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.render('home', { message: 'Invalid email or password' });
        }

        const token = createTokenForUser(user);
        res.cookie("token", token).redirect('/');
 
    } catch (error){
        res.render("home",{ message: error.message});
    }
   
}

const userCart = (req,res)=>{
    res.render('cart',{ user: req.user});
}

module.exports = { 
    signupUser,
    loginUser,
    userCart,
}