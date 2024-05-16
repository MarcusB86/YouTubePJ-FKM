import { useEffect, useState } from "react";
// import Navbar from "./Navbar";
import Form from "./Form";
import { useParams } from "react-router-dom";

export default function Video() {
    // const [searchVideo, setSearchVideo] = useState('');
    const [videos, setVideos] = useState([])
    const { videoID } = useParams()
    console.log(videos)


    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=contentDetails&id=${videoID}`).then((res) => res.json()).then((response) => {
            setVideos(response);
        })
    }, [])
console.log(videoID);

    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${videoID}`}
  frameborder="0" id="player" height="400" width="650" title="YoutubePlayer" >
            </iframe>
            <br/>
            <div>
                <span>Comments:</span> 
                <br/>
                <Form />
            </div>
        </div>
    )
}