import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import AppsIcon from "@mui/icons-material/Apps"
import NotificationsIcon from "@mui/icons-material/Notifications"
import "./NavBar.css";
import { Avatar } from "@mui/material";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div>
          <Link to="/">
          <MenuIcon />
            <img className="nav__logo" src="https://www.seekpng.com/png/detail/77-772362_youtube-logo-youtube-logo-png.png" alt="" />
          </Link>
      </div>

      <div>
            <input type="text" />
            <SearchIcon />
      </div>

      <div>
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHj-AOLa0gjwtF5jykT1y4FoGNen8hLJdjA&usqp=CAU" />
      </div>

      <div>
          <Link to='/video'>
            <li>Video</li>
          </Link>
      </div>

      <div>
        <Link to="/search"></Link>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
      </div>
    </div>
  );
};

export default Navbar;
