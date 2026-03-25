const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET_KEY;

function createTokenForUser(user){
     const payload = {
        _id: user._id.toString(),
        name: user.fullName,
        email: user.email,
        profileImageURL: user.profileImageUrl,
        phone: user.phone,
        role: user.role,
     }

     const token = JWT.sign(payload, secret);
     return token;
}

function validateToken(token){
    const payload = JWT.verify(token, secret)
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
}