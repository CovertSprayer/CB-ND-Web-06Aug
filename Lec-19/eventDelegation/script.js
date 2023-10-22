// const children = document.querySelectorAll('.child');
const parent = document.querySelector('.parent');

// for(let div of children ){
//     div.addEventListener('click', (e)=>{
//         console.log(e.target.innerText); 
//     })
// }

parent.addEventListener('click', (e)=>{
    if(e.target.classList.contains('child')){
        console.log(e.target.innerText); 
    }
})
