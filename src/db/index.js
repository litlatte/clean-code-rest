const mongoose = require('mongoose');

function connectToDatabase(callback, DB_FULLURL=null) {
    DB_FULLURL = DB_FULLURL || process.env.DB_FULLURL;
    mongoose.connect(DB_FULLURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected!!');
        callback();
    }).catch(err => {
        console.log('Failed to connect to MongoDB', err);
        process.exit();
    });
}
module.exports = {
    mongoose,
    connectToDatabase
}