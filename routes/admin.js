const express = require('express');
const router = express.Router();
const { adminLogin, adminCheck, adminHome, } = require('../controllers/admin');
const { checkAdminLogin } = require('../middlewares/authentication');

router.get('/', checkAdminLogin('token_admin'),adminHome);
router.route('/login').get(adminLogin).post(adminCheck)

router.get('/logout',(req,res)=>{
    res.clearCookie('token_admin').redirect('/admin/login');
})

module.exports = router; 