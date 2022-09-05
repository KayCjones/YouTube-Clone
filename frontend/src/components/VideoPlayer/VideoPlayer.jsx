import React from "react";
import { Avatar } from "@mui/material";


function VideoPlayer({image, title, channel, views, timestamp, channelImage}) {
    return (

        <div className="videoPlayer">
            <img className="videoPlayer__thumbnail" src="videocard" alt=""/>
            <div className="videoPlayer__info">
                <Avatar
                    className="videoPlayer__avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} - {timestamp}
                    </p>
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