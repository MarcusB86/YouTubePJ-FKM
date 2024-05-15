import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar({ handleSearchSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form from refreshin
        handleSearchSubmit(e.target.elements.search.value); //target the input field with the Name "search"
    }

    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/Aboutme">About Me</Link>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="search" placeholder='Search video here' onChange={(e) => handleSearchSubmit(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        </nav>
    );
}


