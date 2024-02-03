import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className='nav-links'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/quotes/new'>Create Quote</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar