import { useState } from "react";
import Navbar from "./Navbar";

export default function Video() {
    const [videos, setVideos] = useState([])


    return (
        <div>

            <iframe src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0" height="400" width="650" title="YoutubePlayer" >
            </iframe>
            <p>Video Page</p>
        </div>
    )
}