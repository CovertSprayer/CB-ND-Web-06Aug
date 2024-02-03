import React from 'react'
import './Quote.css'
import { useNavigate } from 'react-router-dom'

const Quote = ({quote:{_id, author, photo, text}}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=>{
      navigate(`/quotes/${_id}`)
    }} className='card'>
        <div className="card-header">
            <img src={photo} />
        </div>
        <div className="card-body">
            <p>{text}</p>
            <p>- {author}</p>
        </div>
    </div>
  )
}

export default Quote