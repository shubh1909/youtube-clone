import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AvatarIcon from "@material-ui/core/Avatar";
import "..//css/header.css";
import Logo from "../images/youtube-red.svg";
import { Link } from "@material-ui/core";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="header__input">
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="header__inputText"
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputbutton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <AvatarIcon className="header__icon" alt="shubh" src="" />
      </div>
    </div>
  );
}
export default Header;
