import React, { useState } from "react";
import "../styles/settings.css";

import GithubIcon from "../Assists/icons/github-icon.png";

const themes = [
  "material",
  "mdn-like",
  "the-matrix",
  "night",
  "dracula",
  "ayu-dark",
  "oceanic-next",
  "midnight",
  "rubyblue",
  "idea",
];

function Settings({ setIsSettingsPopUpOpen, setThemeSelected, themeSelected }) {
  // will use for copyright year
  const date = new Date();

  const ExitHandler = () => {
    setIsSettingsPopUpOpen((preValue) => !preValue);
  };

  return (
    <div className="settings-container">
      <div className="settings-main-container">
        <div className="settings-navbar">
          <button
            className="settings-close-button"
            onClick={ExitHandler}
          ></button>
        </div>
        <div className="settings-main-field-container">
          <div className="themes-container">
            {themes.map((theme, index) => (
              <div
                className={`theme ${
                  themeSelected === theme && "theme-selected"
                }`}
                onClick={() => {
                  setThemeSelected(theme);
                }}
              >
                <h5>{theme}</h5>
              </div>
            ))}
          </div>
          <div className="languages-container">
            <div className="language">
              <h5>HTML</h5>
            </div>
            <div className="language">
              <h5>Css</h5>
            </div>
            <div className="language">
              <h5>Js</h5>
            </div>
          </div>
          <div className="editors-info">
            <div className="editors-github-container">
              <img src={GithubIcon} alt="" className="editors-github-icon" />
              Check the Github!
            </div>
            <div className="editors-information">
              Ctrl + S will save your code and refresh the web view <br /> and
              your code will save per each second.
            </div>
            <div className="editors-information">
              Online Editors were always famous! <br /> they're easy to use,
              free <br />
              and the best option for low-end laptops.
              <br />© {date.getFullYear()} Vito mohagheghian. All Rights
              Reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="background-button-exit" onClick={ExitHandler}></div>
    </div>
  );
}

export default Settings;
