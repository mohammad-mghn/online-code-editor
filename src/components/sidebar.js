/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "../styles/sidebar.css";

import SeetingsIcon from "../Assists/icons/settings-icon.png";
import InfoIocn from "../Assists/icons/info-icon.png";
import ShareIcon from "../Assists/icons/share-icon.png";
import EditorIcon from "../Assists/icons/editor-icon.png";

function Sidebar({ setIsSettingsPopUpOpen }) {
  const SettingsPopUphandler = () => {
    setIsSettingsPopUpOpen((preValue) => !preValue);
  };

  return (
    <aside>
      <div className="menu_editor_icon">
        <img src={EditorIcon} alt="" className="editor_icon" />
        <h4 className="menu_editor_title">Online editor</h4>
      </div>
      <button onClick={SettingsPopUphandler} className="menu-container">
        <img
          src={SeetingsIcon}
          alt=""
          className="menu_icon rotate-animation "
        />
        <h4 className="menu_item_title">Settings</h4>
      </button>
      <button className="menu-container">
        <a target={"_blank"} href="https://mohagheghian.netlify.app">
          <img src={InfoIocn} alt="" className="menu_icon rotate-animation" />
          <h4 className="menu_item_title">Info</h4>
        </a>
      </button>
      <button className="menu-container">
        <img src={ShareIcon} alt="" className="menu_icon" />
        <h4 className="menu_item_title">Share</h4>
      </button>
    </aside>
  );
}

export default Sidebar;
