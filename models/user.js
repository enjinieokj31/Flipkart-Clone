const { Schema, model } = require('mongoose');


const userSchema = new Schema({   
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    profileImageUrl: {
        type: String,
        default: '/images/avatar.png',
    },
    phone: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
    }

}, { timestamps: true});

// secure password with bcrypt

// userSchema.pre('save', async function(next){    // Kartik@321  // harman123
//     const user = this;   // this stores current user , before entering it to database=> .pre
//      if(!user.isModified('password')){
//          next();
//      }
//      try{
//         const salt  = await bcrypt.genSalt(10);
//         const hashPassword = await bcrypt.hash(user.password,salt);
//         user.password = hashPassword;
//         user.salt = salt;

//      }catch(error){
//         next(error);
//      }
    
// })

// jwt token

// userSchema.static('matchPasswordandGenerateToken',async function(email, password){   // in case of login compare user entered password and existing password using .compare
//     const user = await this.findOne({ email });

//     if(!user) throw new Error('User not found');

//     const hashedPassword = user.password;

//    const passwordMatch = await bcrypt.compare(password, hashedPassword)

//     if(!passwordMatch) throw new Error('Incorrect Password');

//     const token =  createTokenForUser(user);
//     return token;
// })



const User = model('user',userSchema)

module.exports = User;