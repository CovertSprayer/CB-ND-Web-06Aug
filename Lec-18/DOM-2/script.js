const heading = document.querySelector('h2');
const para = document.querySelector('p');

console.log(heading);

// heading.onclick = function(){
//     console.log('Clicked!!')
// }

// heading.onclick = function(){
//     console.log('clicked again!!')
// }

// --------------- addEventListener
heading.addEventListener('click', ()=>{
    console.log('Clicked!')
})

heading.addEventListener('click', ()=>{
    console.log('Clicked again!!')
})

heading.addEventListener('click', ()=>{
    console.log('Clicked again part 3!!');
    heading.style.color = 'red';
    para.style.fontSize = '65px'
})

para.addEventListener('dblclick', (e)=>{
    console.log('dbl clicked!!');
    console.log(e.target);
    console.log(this);
})

para.addEventListener('copy', ()=>{
    console.log('NO cheating allowed!!');
    window.alert('Warning!!!');
})
// const div = document.querySelector('div');
document.querySelector('div').addEventListener('mouseenter', (e)=>{
    e.target.style.backgroundColor = 'yellow';
    e.target.style.border = '2px solid black';
});

document.querySelector('div').addEventListener('mouseleave', (e)=>{
    e.target.style.backgroundColor = '';
    e.target.style.border = '';
});

// --------------- form

const input = document.querySelectorAll('input');
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let username = input[0].value;
    let password = input[1].value;

    console.log(username, password);
});

// ------------------ KeyboardEvent
input[0].addEventListener('focus', (e)=>{
    console.log(e.target);
    // e.target.style.fontSize = '30px';
    e.target.style.backgroundColor = 'yellow';
});

input[0].addEventListener('keydown', (e)=>{
    console.log('key pressed!!');
    console.log(e);
})


