import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function Video() {
    // const [searchVideo, setSearchVideo] = useState('');
    const [videos, setVideos] = useState([])
    const { videoID } = useParams()


    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=contentDetails&id=${videoID}`).then((res) => res.json()).then((response) => {
            setVideos(response);
        })
    }, [])
console.log(videos);
    return (
        <div>
            <iframe src={`http://www.youtube.com/embed/${videoID}enablejsapi=1`}
  frameborder="0" id="player" height="400" width="650" title="YoutubePlayer" >
            </iframe>
            <p>Video Page</p>
        </div>
    )
}