function Movies(movie){
    console.log('Inside Movies Fun')

    console.log(typeof movie)
    movie();

    function Barbie(){
        console.log('Inside Barbie function')
    }

    function OpenHeimer(){
        console.log('Inside OpenHeimer function')
    }

    if(movie === 'barbie'){
        return Barbie;
    }
    else if(movie === 'openheimer'){
        return OpenHeimer;
    }
    else{
        return function (){
            console.log('No Movie Found!!');
        }
    }
}



let returnedFun = Movies(function(){
    console.log('inside random')
});
returnedFun();
console.log(returnedFun);