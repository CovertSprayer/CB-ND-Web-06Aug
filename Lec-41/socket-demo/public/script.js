const socket = io();

const inp = document.querySelector('input[type="text"]');
const sendBtn = inp.nextElementSibling;
const chat = document.querySelector('.chat');

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
    div.innerHTML = `<strong>${data._id} :</strong> <span>${data.msg}</span>`
    chat.append(div);
})