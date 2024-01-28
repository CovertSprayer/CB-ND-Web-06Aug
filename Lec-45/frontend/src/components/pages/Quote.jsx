import React from 'react'
import './Quote.css'

const Quote = ({quote:{author, photo, text}}) => {
  return (
    <div className='card'>
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