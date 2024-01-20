const socket = io();
const inp = document.querySelector('#chat-inp');
const sendBtn = inp.nextElementSibling;
const chat = document.querySelector('.chat');

const containers = document.querySelectorAll('.chat-container') ;
const usernameContainer = containers[0];
const chatContainer = containers[1];

chatContainer.style.display = 'none';

sendBtn.addEventListener('click', (e)=>{
    const text = inp.value;
    inp.value = '';

    if(text == '') return;
    socket.emit('textMsg', text);
})

socket.on('returnMsg', (data)=>{
    const div = document.createElement('div');

    if(socket.id === data._id)
        div.classList.add('msg', 'sender');
    else{
        div.classList.add('msg', 'receiver');
    }
    div.innerHTML = `<strong>${data.username} :</strong> <span>${data.msg}</span>`
    chat.append(div);
})

const usernameFeild = document.querySelector('#inp');
document.querySelector('#username-btn')
    .addEventListener('click', (e)=>{
        const username = usernameFeild.value;
        usernameFeild.value = '';
        
        if(username == '') return;

        socket.emit('username', username);

        usernameContainer.style.display = 'none';
        chatContainer.style.display = 'block';

})
