const express = require('express');
const router = express.Router();
const { signupUser, loginUser, userCart } = require('../controllers/user');
const { checkIsLoggedIn } = require('../middlewares/authentication');


router.post('/signup', signupUser);

router.post('/login', loginUser);

router.get('/cart', checkIsLoggedIn("token"), userCart)

router.get('/logout',(req,res)=>{
    res.clearCookie('token').redirect('/');
})

module.exports = router;