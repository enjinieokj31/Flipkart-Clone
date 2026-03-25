const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection      // we are storing behaviour of connection in db

db.once('open',()=>{
    console.log('connected with mongoDB');
})

db.on('error',()=>{
    console.log('something went wrong');
})