const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

child.addEventListener('click', (e)=>{
    // e.stopPropagation();
    console.log('Child clicked!!'); 
})

parent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('parent clicked!!');
})

grandParent.addEventListener('click', (e)=>{
    console.log('grand-parent clicked!!');
})