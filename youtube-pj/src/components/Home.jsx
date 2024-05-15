import React, { useState } from "react";
import "./styles.css"
import { Link } from "react-router-dom";

export default function Home({handleSearchSubmit,videos,setVideos,searchVideo,setSearchVideo}) {
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
                    <Link to={`/video/${video.id}`}>
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
