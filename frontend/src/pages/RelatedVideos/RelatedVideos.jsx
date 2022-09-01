import React, {useEffect, useState} from "react";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";



const RelatedVideos = ({videoId}) => {
    const[relatedVideos, setRelatedVideos]= useState([])
    useEffect(() => {
 
    const fetchRelatedVideos =async(videoId)=>{
      try { 
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0&part=snippet`)
        setRelatedVideos(response.data);
        console.log(response.data) 
      }
     catch (error) {
        console.log(error.response.data);
      }
    }
fetchRelatedVideos(videoId);
  }, []);
  
  
  
  
  return (
    <div>
      <h1>Related Videos</h1>
      {relatedVideos.map((element, index) =>{
        if (element.id){
          return <p>{element.snippet.title}</p>
        }

      })}
    </div>
  
  );
};

export default RelatedVideos;