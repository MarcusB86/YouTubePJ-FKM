import React, { useState } from "react";
import "./styles.css"
import { Link } from "react-router-dom";

export default function Home() {
    const [searchVideo, setSearchVideo] = useState('');
    const [videos, setVideos] = useState([]);
    

    function handleSearchSubmit(event) {
        event.preventDefault();

    
        const apiKey = import.meta.env.VITE_API_KEY;

      
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${searchVideo}&maxResults=8`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                if (data.items.length === 0) {
                    throw new Error('No videos found');
                }
                const videoItems = data.items.map(item => ({
                    id: item.id.videoId,
                    title: item.snippet.title,
                    thumbnail: item.snippet.thumbnails.default.url
                }));
                setVideos(videoItems);
                
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
                setVideos([]);
            });
    }
    return (
        <div>
            <h1 className="title">TubeYou?</h1>

            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for videos..."
                    value={searchVideo}
                    onChange={(event) => setSearchVideo(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="page-container">
            <div className="video-grid">
                {videos.map(video => (
                    <Link to={"/video"}>
                    <div key={video.id}>
                        <img src={video.thumbnail} alt="Thumbnail" />
                        <p>{video.title}</p>
                        
                    </div>
                    </Link>
                ))}
            </div>
            </div>
        </div>
    );
}
