const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { title: subreddit })
})

app.get('/randomNum', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);
    res.render('randomNum', { num: randomNum });
})

app.get('/todoList', (req, res) => {
    const data = ['Swimming', 'Gaming', 'Coding', 'Buy Groceries'];
    res.render('todo', { todos: data })
})

const PORT = 4444;
app.listen(PORT, () => {
    console.log('Server is up at port', PORT);
})