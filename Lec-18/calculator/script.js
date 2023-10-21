const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        let text = e.target.innerText;
        
        if(text === 'C'){
            display.value = '';
        }
        else if(text === 'x'){
            display.value += '*';
        }
        else if(text === '='){
            try {
                display.value = eval(display.value);
            } catch (error) {
                // console.log(error)
                display.value = 'Error!!';
            }
        }
        else{
            display.value += text;
        }
    })
}
