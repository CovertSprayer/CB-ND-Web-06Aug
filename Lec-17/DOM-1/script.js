const heading = document.getElementsByTagName('h2');
console.log(heading[0]);
heading[0].style.color = 'red'
heading[0].style.border = '2px solid black'

heading[1].style.backgroundColor = 'teal';

const specialPara = document.getElementById('special');
console.log(specialPara);
specialPara.style.fontSize = '2rem'

const paras = document.getElementsByClassName('para');
console.log(paras);

for(let para of paras){
    para.style.color = 'blue';
}

const inp = document.getElementsByName('username');
console.log(inp);
console.log(inp[0]);
inp[0].style.padding = '20px';

let newHeading = document.querySelector('h2');
console.log(newHeading);

console.log(document.querySelector('#special'))
console.log(document.querySelectorAll('.para'))
console.log(document.querySelectorAll("input[name='username']"))
console.log(document.querySelectorAll("ul li"))

document.querySelector('p span').style.color = 'red'

heading[0].innerText = 'This is some heading!!';
heading[0].innerHTML = 'This is <em>some</em> heading!!';

console.log(paras[0].getAttribute('style'))


// ------------- classList
heading[0].classList.add('one');
heading[0].classList.add('three', 'four');
heading[0].classList.remove('three');
heading[0].classList.toggle('three');
heading[0].classList.toggle('three');


// --------------- traversing
const movieSection = document.querySelector('.movie-section');
movieSection.parentElement;
movieSection.children;
movieSection.nextElementSibling;
movieSection.previousElementSibling;

// ------------------------
const ul = document.querySelector('ul')
let li = document.createElement('li')
li.innerText = 'BahuBali 2'
ul.children[1].after(li)
ul.children[1].before(li)
