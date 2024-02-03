import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditQuote = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    // const authorRef = useRef();
    // const quoteRef = useRef();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:5000/quotes/${params.id}`)
            .then(res => {
                setAuthor(res.data.quote.author);
                setText(res.data.quote.text);
            })
    }, [])

    async function submitHandler(e){
        e.preventDefault();
        await axios.put(`http://localhost:5000/quotes/${params.id}/edit`, 
                        {author, text});
        navigate('/');
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor="author">Author Name:</label> <br />
                    <input onChange={(e)=>{
                        setAuthor(e.target.value)
                    }} value={author} id='author' type="text" placeholder='Enter Author Name' />
                </div>

                <div className='form-control'>
                    <label htmlFor="text">Quote</label> <br />
                    <textarea onChange={(e)=>{
                        setText(e.target.value);
                    }} value={text} id="text" cols="30" placeholder='Write your quote here...' rows="5"></textarea>
                </div>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditQuote