const express = require('express');
const app = express();
const path = require('path');
const uuid = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(methodOverride('_method'));

let blogs = [
    {
        id: uuid.v4(),
        text: "Some random text",
        username: "Abhinav",
        email: "abcd@gmail.com"
    },
    {
        id: uuid.v4(),
        text: "Some random text 2",
        username: "Rahul",
        email: "xyz@gmail.com"
    }
];

app.get('/', (req, res) => {
    res.send('Working Fine!');
});

app.get('/blogs', (req, res) => {
    console.log(blogs);
    res.render('blogs', { blogs });
})

app.get('/blog/new', (req, res) => {
    res.render('new');
})

app.post('/blogs', (req, res) => {
    const { text, username, email } = req.body;
    blogs.push({ id: uuid.v4(), text, username, email });
    // blogs.push(req.body);
    res.redirect('/blogs');
})

app.get('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find((blog) => {
        return blog.id === id;
    })

    console.log(blog);
    res.render('show', { blog });
})

app.get('/blogs/:id/edit', (req, res)=>{
    const {id} = req.params;
    const blog = blogs.find((blog) => {
        return blog.id === id;
    })

    res.render('edit', {blog});
})

app.patch('/blogs/:id', (req, res)=>{
    const newBlog = req.body;
    const {id} = req.params;
    let blog = blogs.find((blog) => {
        return blog.id === id;
    })

    // const ind = blogs.indexOf(blog);
    // blogs.splice(ind, 1);
    // blogs.push(newBlog);

    blog.email = newBlog.email;
    blog.username = newBlog.username;
    blog.text = newBlog.text;

    res.redirect('/blogs');
})


app.delete('/blogs/:id', (req, res) => {
    const { id } = req.params;
    const blog = blogs.find(blog => blog.id === id);
    const index = blogs.indexOf(blog);
    blogs.splice(index, 1);

    res.redirect('/blogs');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});