import React from "react";

const VideoPlayer = (props) => {
        return(
            <div>
                <iframe src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`} ></iframe>

            </div>

        )

}

export default VideoPlayer