

const id = setInterval(()=>{
    console.log('Hi')
}, 200)

setTimeout(() => {
    clearInterval(id);
}, 3000);