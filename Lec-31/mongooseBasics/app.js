const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/userDB')
    .then(()=> console.log('DB Connected'))
    .catch(err => console.log(err))

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    contact:Number
})

const User = mongoose.model('user', userSchema);

// --------------- create
// const newUser = new User({
//     username:"rahul",
//     email:"rahul@yahoo.com",
//     contact:9999999999
// })

// newUser.save()
//     .then(()=> console.log('user created successfully!!'))

// User.create({
//     username:'Sachin',
//     email:'sachin@gmail.com',
//     contact:9090909090
// }).then(()=> console.log('user created successfully!!'))


// ------------------------ read
// User.find({})
//     .then(data => console.log(data));

// User.findOne({username:"rahul"})
//     .then(data => console.log(data));

// ----------------------- update
// User.updateOne({username:'Sachin'}, {email:'sachin@yahoo.com'})
//     .then(data => console.log(data));

    //updateMany()

// -------------------------- delete
// User.deleteOne({username:'rahul'})
//     .then(msg=>console.log(msg));

    // deleteMany()

// User.deleteMany({})
//     .then(msg => console.log('Collection deleted successfully!'))

// findById()
// findByIdAndUpdate()
// findByIdAndDelete()

// User.findById('657552f7dcb6c3c7e18011d0')
//     .then(user => console.log(user))

// User.findByIdAndUpdate('657552f7dcb6c3c7e18011d0', {contact:'1234567890'}, {new:true})
//     .then(user => console.log(user))

// User.findByIdAndDelete('657552f7dcb6c3c7e18011cf')
//     .then(user => console.log(user))


