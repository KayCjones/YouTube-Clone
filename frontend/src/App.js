// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { googleApiKey } from "./api";

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
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video"element={<VideoPlayerPage/>}/>
        <Route path= "/relatedvideos" element={<RelatedVideos/>}/>
        <Route path= "/search" element={<SearchBar/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
