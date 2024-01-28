import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from './Quote';

const AllQuotes = () => {

    const [quotes, setQuotes] = useState([]);

    async function getData() {
        const res = await axios.get('http://localhost:5000/quotes');
        setQuotes(res.data.quotes)
    }

    useEffect(() => {
        getData();
    })

    return (
        <div style={{display:'flex', margin:'20px auto', gap:'18px' ,flexWrap:'wrap', maxWidth:'1300px', justifyContent:'center'}}>
            {quotes.map(quote => {
                return <Quote  quote={quote}/>
            })}
        </div>
    )
}

export default AllQuotes