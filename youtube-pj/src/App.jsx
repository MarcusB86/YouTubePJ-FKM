import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar' 
import Video from './components/Video'
import Home from './components/Home';
import { useState } from 'react';
import Aboutme from './components/Aboutme';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchVideo, setSearchVideo] = useState('');
  function handleSearchSubmit(event) {
    
    // event.preventDefault();

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
      <Router>
      <Navbar handleSearchSubmit={handleSearchSubmit} />
        <Routes>
          <Route exact path="/" element={<Home handleSearchSubmit={handleSearchSubmit} videos={videos} setVideos={setVideos} searchVideo={searchVideo} setSearchVideo = {setSearchVideo}/>} />
          <Route path="/video/:videoId" element={<Video/>} />
          <Route path="/AboutMe" element={<Aboutme/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
