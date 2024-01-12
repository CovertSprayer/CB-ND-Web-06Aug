const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: String,
    role: String,
    wishList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    cart:[
        {
            _id:false,
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);
module.exports = User;