const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

let todos = ['Gaming', 'Coding'];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/todos', (req, res) => {
    res.json({
        success: true,
        todos
    })
})

app.post('/todos', (req, res) => {
    try {
        const { todo } = req.body;
        todos.push(todo);
        console.log(todos)
        res.status(200).json({
            success:true
        })
    } catch (error) {
        res.status(400).json({
            success:false
        })
    }
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});