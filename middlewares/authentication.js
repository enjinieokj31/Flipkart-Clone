const jwt = require('jsonwebtoken');

const { validateToken } = require("../services/authentication");

function checkForAuthCookie(cookieName) {
    return (req, res, next) => {
        try {
            const tokenCookieValue = req.cookies[cookieName];

            if (!tokenCookieValue) {
                return next(); 
            }

            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;
            
        } catch (error) {
            console.error("Internal Server Error", error);
        }
        return next();
    };
}

function checkIsLoggedIn(cookieName){
    return (req, res, next) => {
        try{

            const tokenCookieValue = req.cookies[cookieName]

            if(!tokenCookieValue){
               return res.render('home',{ message: "Please log in"})
             }

             const userPayload = validateToken(tokenCookieValue);
             req.user =  userPayload;
        } catch(error){
            return res.render('home',{ message: "Please log in"})
        }
            
        return next();
    }
}


function checkAdminLogin(cookieName){
    return (req, res, next) => {
        try{

            const tokenValue = req.cookies[cookieName]

            if(!tokenValue){
               return res.render('admin',{ message: "Please log in"})
             }

            const adminPayload = jwt.verify(tokenValue, process.env.JWT_SECRET_KEY_ADMIN);
            req.adminPayload = adminPayload; 

        } catch(error){
                return res.render('admin', { message: "Internal server error" });
        }
            
        return next();
    }
}


module.exports = {
    checkForAuthCookie,
    checkIsLoggedIn,
     checkAdminLogin,
};

