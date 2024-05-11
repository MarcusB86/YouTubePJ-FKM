import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <p>Home</p>
            <p>Favorites</p>
            <p>About Me</p>
            {/* <img src="" alt="" />
            <Link to="/favorites">Favorites</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link> */}
        </nav>
    );
}