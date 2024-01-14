const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const socket = require("socket.io");
const io = new socket.Server(server);

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    // res.send('Working Fine!');
    res.render('index');
})

io.on("connection", (socket)=>{
    console.log('Connection established!');
    console.log(socket.id);

    socket.on('textMsg', (data)=>{
        io.emit('returnMsg', {
            msg:data,
            _id:socket.id
        });
    })

})

const PORT = process.env.PORT || 4444;
server.listen(PORT, ()=>{
    console.log('Server is up at port ', PORT);
})