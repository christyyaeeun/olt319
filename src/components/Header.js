import React from "react";
import "../styles/style.css";


const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header-wrapper">
      <div className="heading-content">
        <small className="heading">our lives together</small>

        <button onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}
          className="toggleMode">
          <img src="toggle-on-solid.svg" id="toggle-on"></img>
        </button>
      </div>
    </div>
  );
};

export default Header;
