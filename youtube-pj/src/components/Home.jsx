import React, { useState } from "react";
import "./styles.css"

export default function Home() {
    const [searchVideo, setSearchVideo] = useState('');
    const [videos, setVideos] = useState([]);

    function handleSearchSubmit(event) {
        event.preventDefault();

    
        const apiKey = 'AIzaSyDg3kzDFajLeMcs1XTKF3oegDOLQtro2z0';

      
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
                setError(null);
            })
            .catch(error => {
                setError(error.message);
                setVideos([]);
            });
    }
    return (
        <div>
            <h1>TubeYou</h1>

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
                    <div key={video.id}>
                        <img src={video.thumbnail} alt="Thumbnail" />
                        <p>{video.title}</p>
                        
                    </div>
                    
                ))}
            </div>
            </div>
        </div>
    );
}





























// import React, { useState } from "react";

// export default function Home() {
//     const [searchVideo, setSearchVideo] = useState('');
//     const [videos, setVideos] = useState([]);

//     function handleSearchInputChange(event) {
//         setSearchVideo(event.target.value);
//     }

//     async function handleSearchSubmit(event) {
//         event.preventDefault();
//         setVideos([]);

     
//         const apiKey = "AIzaSyDg3kzDFajLeMcs1XTKF3oegDOLQtro2z0";

      
//         const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${searchVideo}&maxResults=8`);
//         const data = await response.json();

        
//         const videoItems = data.items.map(item => ({
//             id: item.id.videoId,
//             title: item.snippet.title,
//             thumbnail: item.snippet.thumbnails.default.url
//         }));

       
//         setVideos(videoItems);
//     }

//     return (
//         <div>
//             <h1>YouTube?</h1>
//             <form onSubmit={handleSearchSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Search for videos..."
//                     value={searchVideo}
//                     onChange={handleSearchInputChange}
//                 />
//                 <button type="submit">Search</button>
//             </form>

//             {/* Display the search results */}
//             <div>
//                 {videos.map(video => (
//                     <div key={video.id}>
//                         <Link to={`/video/${video.id}`}>
//                         <img src={video.thumbnail} alt="Thumbnail" />
//                         <p>{video.title}</p>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

    




// import React, { useState } from "react";
// import Navbar from "./Navbar";

// export default function Home() {
//     const [searchVideo, setSearchVideo] = useState('');
//     const [searchResults, setSearchResults] = useState([]);

//     const API_KEY = process.env.VITE_API_KEY;

//     function handleSearchInputChange(event) {
//         setSearchVideo(event.target.value);
//     }

//     function handleSearchSubmit(event) {
//         event.preventDefault();
//         fetch(
//             `https://youtube.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchVideo}`
//         )
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch videos");
//             }
//             return response.json();
//         })
//         .then(() => {
//             setSearchResults()
//         })
//         .catch((error) => {
//             console.error("Error fetching videos:", error);
//         });
//     }

//     return (
//         <div>
//             <Navbar />
//             <h1>YouTube Project</h1>
//             <form onSubmit={handleSearchSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Search for videos..."
//                     value={searchVideo}
//                     onChange={handleSearchInputChange}
//                 />
//                 <button type="submit">Search</button>
//             </form>
//         </div>
//     );
// };


// import React, { useState } from 'react';

// function Home() {
//   const [searchVideos, setSearchVideos] = useState('');
//   const [videos, setVideos] = useState([]);

//   function handleInputChange(event) {
//     setSearchVideos(event.target.value);
//   };

//   function handleSearchSubmit() {
//     console.log('Searching for:', searchVideos);
    
//   };

//   return (
//     <div>
//       <h1>Youtube?</h1>
//       <input
//         type="text"
//         placeholder="Search for videos..."
//         value={searchVideos}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearchSubmit}>Search</button>
//       <p>Prompting the user to search for videos...</p>
//     </div>
//   );
// }

// export default Home;
