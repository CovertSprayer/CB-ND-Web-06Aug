const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let todos = ['Coding', 'Gaming'];

// app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Working Fine!');
})

app.get('/todos', (req, res) => {
    res.render('todos', { todos });
})

app.post('/todos', (req, res) => {
    const { todo } = req.body;
    todos.push(todo);
    res.redirect('back');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});