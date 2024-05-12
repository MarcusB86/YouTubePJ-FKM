import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/favorites">Favorites</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
            <input type="text" placeholder='Search video here' onChange={(e) => alert(e.target.value)} />
        </nav>
    );
}