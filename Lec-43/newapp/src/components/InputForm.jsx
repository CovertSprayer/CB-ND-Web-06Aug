import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const InputForm = (props) => {
    const [inputVal, setInputVal] = useState('');

    function submitHandler(e) {
        e.preventDefault();
        props.addTodo({id:uuid(), text:inputVal});
        setInputVal('');
    }

    function changeHandler(e){
        setInputVal(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={changeHandler} type="text" placeholder='type here...' value={inputVal} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default InputForm