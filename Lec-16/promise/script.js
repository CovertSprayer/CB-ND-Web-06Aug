
// let password = 'abcd'

// let promise = new Promise(function(resolve, reject){
//     if(password === 'abcd'){
//         resolve('User Verified!!');
//     }
//     else{
//         reject('User not Verified!!');
//     }
// });

// promise
//     .then(function(data){
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

let kalMilneAaunga = true;

let promise = new Promise((resolve, reject) => {
    if(kalMilneAaunga){
        setTimeout(()=>{
            resolve('Milne aagya!');
        }, 3000)
    }
    else{
        reject();
    }
})

promise
    .then(function(text){
        console.log(text);
        console.log('padaya!!')
    })
    .catch(function(){
        console.log('Mojjjjjjjjjj hai')
    })