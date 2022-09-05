import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { googleApiKey } from "../../api";

const HomePage = ({fetchVideos, videos}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth("")

  // const [displayData, setDisplayData] = useState([])

  // const setSearchData = (e) => {
  //     setSearchTerm(e.target.value)
  //     let results = e.data.filter((el) => {
  //       if(el.name.includes(e.target.value)){
  //         return true;
  //       }
  //     })
  //     setDisplayData(results)
  // }



  useEffect(() => {
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      {videos &&
        videos.map((vid) => (
          <p key={vid.id.videoId}>
            <iframe src={`https://www.youtube.com/embed/${vid.id.videoId}`} />
            <div>{vid.snippet.title} </div>
          </p>
        ))}
    </div>
  );
};

export default HomePage;