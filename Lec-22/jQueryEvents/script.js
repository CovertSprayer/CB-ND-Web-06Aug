// document.querySelector('h1').addEventListener('click', function(e){
//     // console.log(e.target);
//     console.log(this);
//     console.log('clicked');
// })


$('h1').on('click', function(e){
    console.log(this);
    this.style.color = 'red';
    // console.log(e.target);
    // $(e.target).css('color', 'red');
    console.log('clicked');
})

$('h2').on('dblclick', function(){
    console.log('doubled clicked!!');
})


