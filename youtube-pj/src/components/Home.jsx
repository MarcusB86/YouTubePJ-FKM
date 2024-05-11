import React, { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
    const [searchVideo, setSearchVideo] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const API_KEY = process.env.VITE_API_KEY;

    function handleSearchInputChange(event) {
        setSearchVideo(event.target.value);
    }

    function handleSearchSubmit(event) {
        event.preventDefault();
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchVideo}`
        )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch videos");
            }
            return response.json();
        })
        .then(() => {
            setSearchResults()
        })
        .catch((error) => {
            console.error("Error fetching videos:", error);
        });
    }

    return (
        <div>
            <Navbar />
            <h1>YouTube Project</h1>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for videos..."
                    value={searchVideo}
                    onChange={handleSearchInputChange}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};
