import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'


export default function Navbar({ handleSearchSubmit }) {

    return (
        <nav className='navbar'>
            <Link to="/favorites">Favorites</Link>
            <Link to="/">Home</Link>
            <Link to="/Aboutme">About Me</Link>
            <input type="text" placeholder='Search video here' onChange={(e) => handleSearchSubmit(e.target.value)} />
        </nav>
    );
} 


