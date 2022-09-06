import React from "react";
import { Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { googleApiKey } from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

function VideoPlayer({image, title, channel, views, timestamp, channelImage}) {

    const {state} = useLocation();
    const { vid } = state;
    const [relatedVideos, setRelatedVideos] = useState([])

    useEffect(() => {
        const fetchRelatedVideos = async() => {
            try {
              let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${vid.id.videoId}&type=video&key=${googleApiKey}`)
                setRelatedVideos(response.data);
              console.log(response.data) 
            } catch (error) {
              console.log(error);
            }
          }
          fetchRelatedVideos();
    }, []);
    console.log(vid)

    const renderVideos = () => {
        if(relatedVideos)
            return relatedVideos.items.map((vid) => {
                return (
                <div className="containerVideo" key={vid.id.videoId}>
                <iframe src={`https://www.youtube.com/embed/${vid.id.videoId}`} />
                <Avatar />
                <p>{vid.snippet.title} </p>
                </div>
                )
            })
    }
    

    return (

        <div className="videoPlayer">
            <img className="videoPlayer__thumbnail" src="videocard" alt=""/>
            <iframe src={`https://www.youtube.com/embed/${vid.id.videoId}`} />
            <div className="videoPlayer__info">
                <Avatar
                    className="videoPlayer__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video__text">
                    <h4>{vid.snippet.title}</h4>
                    <p>{vid.snippet.channel}</p>
                    <p>
                        {vid.snippet.views} - {vid.snippet.timestamp}
                    </p>
                <div>
                    Recommended
                    {renderVideos()}
                </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;






// const VideoPlayer = (props) => {
//         return(
//             <div>
//                 <iframe src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`} ></iframe>

//             </div>

//         )

// }

// export default VideoPlayer