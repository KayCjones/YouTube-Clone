// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { googleApiKey } from "./api";
import { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPlayerPage from "./pages/VideoPlayerPage/VideoPlayerPage";
import RelatedVideos from "./pages/RelatedVideos/RelatedVideos";
import SearchBar from "./components/SearchBar/SearchBar";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect } from "react";
import axios from "axios";

function App() {

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

  const[relatedVideos, setRelatedVideos]= useState([])
 
  const fetchRelatedVideos = async(videoId) => {
    try { 
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&key=AIzaSyCYpL8Ms12BQUCMlecVei-ZYjgb2Kx3Ov0&part=snippet`)
      setRelatedVideos(response.data);
      console.log(response.data) 
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchVideos={fetchVideos}/>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage fetchVideos={fetchVideos} videos={videos}/>
            </PrivateRoute>
          }/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video"element={<VideoPlayerPage/>}/>
        <Route fetchRelatedVideos={fetchRelatedVideos} relatedVideos={relatedVideos} path= "/relatedvideos" element={<RelatedVideos/>}/>
        <Route path= "/search" element={<SearchBar/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
