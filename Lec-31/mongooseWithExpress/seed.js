const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
    .then(()=> console.log('blogDB connected!'))
    .catch((err)=> console.log(err));

const blogSchema = new mongoose.Schema({
    text:String,
    username:String,
    email:String
})

const Blog = mongoose.model('Blog', blogSchema);

const dummyData = [
    {
        text: "Some random text",
        username: "Abhinav",
        email: "abcd@gmail.com"
    },
    {
        text: "Some random text 2",
        username: "Rahul",
        email: "xyz@gmail.com"
    }
]

async function main(){
    await Blog.deleteMany({});
    await Blog.insertMany(dummyData);
    console.log('DB seeded!')
}

main();