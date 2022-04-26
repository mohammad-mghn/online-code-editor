import React from "react";
import "../styles/settings.css";

function Settings({ setIsSettingsOpen }) {
  return (
    <div className="settings-container">
      <div className="settings-main-container">
        <nav className="settings-navbar">
          <button
            className="settings-close-button"
            onClick={() => {
              setIsSettingsOpen((preValue) => !preValue);
            }}
          ></button>
        </nav>
      </div>
    </div>
  );
}

export default Settings;
