import React, { useState } from 'react'

const Counter = () => {

    // let count = 1;
    let [count, setCount] = useState(0)

    function increment(){
        count++;
        setCount(count);
    }

    return (
        <div style={{border:'2px solid black'}} onClick={increment}>{count}</div>
    )
}

export default Counter