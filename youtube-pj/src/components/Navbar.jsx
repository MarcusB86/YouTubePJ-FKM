import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'


export default function Navbar() {
    return (
        <nav className='navbar'>
            <p>Home</p>
            <p>Favorites</p>
            <p>About Me</p>
        </nav>
    );
}