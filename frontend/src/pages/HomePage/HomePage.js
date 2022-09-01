import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { googleApiKey } from "../../api";
const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("music")


  const fetchVideos = async () => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${googleApiKey}&part=snippet`)
      console.log(response.data.items)
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  }


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
  console.log(searchTerm)
  useEffect(() => {
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <input placeholder="search" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={() => fetchVideos()} > Search </button>
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