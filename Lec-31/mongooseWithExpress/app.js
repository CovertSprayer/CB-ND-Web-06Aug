const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
    .then(() => console.log('blogDB connected!'))
    .catch((err) => console.log(err));

const blogSchema = new mongoose.Schema({
    text: String,
    username: String,
    email: String
})

const Blog = mongoose.model('Blog', blogSchema);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Working Fine!');
})

app.get('/blogs', async (req, res) => {
    const blogs = await Blog.find({});
    // Blog.find({})
    //     .then(blogs => {
    //         res.render('blogs', {blogs})
    //     })
    res.render('blogs', { blogs });
})

app.get('/blog/new', (req, res) => {
    res.render('new');
})

app.post('/blogs', async (req, res) => {
    const { text, username, email } = req.body;
    await Blog.create({ text, username, email });

    res.redirect('/blogs');
})

app.get('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    res.render('show', { blog })
})

app.get('/blogs/:id/edit', async (req, res) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    res.render('edit', { blog });
})

app.patch('/blogs/:id', async (req, res) => {
    const { text, username, email } = req.body;
    const { id } = req.params;

    await Blog.findByIdAndUpdate(id, { text, username, email });
    res.redirect('/blogs');
})

app.delete('/blogs/:id', async (req, res) => {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs')
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});