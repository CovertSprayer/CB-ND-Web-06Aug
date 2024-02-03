import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Show = () => {
    const [quote, setQuote] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/quotes/${params.id}`)
            .then((res)=> setQuote(res.data.quote));
    }, [])

    async function deleteHandle(id){
        await axios.delete(`http://localhost:5000/quotes/${id}`);
        navigate('/')
    }

    function editHandle(id){
        navigate(`/quotes/${id}/edit`)
    }

    return (
        <>
            <button onClick={()=>deleteHandle(quote._id)} style={{fontSize:'1rem', margin:'10px'}}>Delete</button>
            <button onClick={()=>editHandle(quote._id)} style={{fontSize:'1rem', margin:'10px'}}>Edit</button>
            <div className='card'>
                <div className="card-header">
                    <img src={quote.photo} />
                </div>
                <div className="card-body">
                    <p>{quote.text}</p>
                    <p>- {quote.author}</p>
                </div>
            </div>
        </>
    )
}

export default Show