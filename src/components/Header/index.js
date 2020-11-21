import React from "react";
import "./index.scss";
import logo from "FrontendAssets/logo.svg";
import profile from "FrontendAssets/profile.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header--left">
        <img src={logo} alt="logo" />
        <div>
          <b>Intugine</b>
        </div>
      </div>
      <div className="header--right">
        <div className="header--right__active">
          <b>Home</b>
        </div>
        <div>
          <b>Brand</b>
        </div>
        <div>
          <b>Transports</b>
        </div>
        <div style={{ padding: 0 }}>
          <div className="header-profile-image">
            <img src={profile} alt="profile" />
          </div>
        </div>
        <div className="down">
          <b>&#709;</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
