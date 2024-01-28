const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    author:String,
    text:String,
    photo:{
        type:String,
        default:'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png'
    }
});

const Quote = mongoose.model('Quote', quoteSchema);
module.exports = Quote;

