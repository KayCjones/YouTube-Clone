import React, {useEffect, useState} from "react";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./RelatedVideos.css"


const RelatedVideos = () => {
  return (  
    <div className="relatedVideos"> 
      <h2>Recommended</h2>
      <div className="relatedVideos__videos">
        <VideoPlayer />
      </div>
    </div>
  );
}
 
export default RelatedVideos;




// const RelatedVideos = ({videoId, fetchRelatedVideos, relatedVideos}) => {


//   useEffect(() => {    
//     fetchRelatedVideos(videoId);
//   }, []);

//   return (
//     <div>
//       <h1>Related Videos</h1>
//       {relatedVideos.map((el, index) =>{
//         if (el.id){
//           return <p>{el.snippet.title}</p>
//         }

//       })}
//     </div>
  
//   );
// };

// export default RelatedVideos;