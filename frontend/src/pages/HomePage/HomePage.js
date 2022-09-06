import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { googleApiKey } from "../../api";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";


const HomePage = ({fetchVideos, videos}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth("")
  const navigate = useNavigate();

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
          <div onClick={() => navigate("/video", { state: { vid }}) } className="containerVideo" key={vid.id.videoId}>
            <iframe src={`https://www.youtube.com/embed/${vid.id.videoId}`} />
            <Avatar />
            <p>{vid.snippet.title} </p>
          </div>
        ))}
    </div>
  );
};

export default HomePage;