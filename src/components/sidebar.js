import React from "react";

import SeetingsIcon from "../Assists/icons/settings-icon.png";
import InfoIocn from "../Assists/icons/info-icon.png";
import ShareIcon from "../Assists/icons/share-icon.png";
import EditorIcon from "../Assists/icons/editor-icon.png";

import "../styles/sidebar.css";

function Sidebar({ setIsSettingsOpen }) {
  return (
    <aside className="aside">
      <div className="menu_editor_icon">
        <img src={EditorIcon} alt="" className="editor_icon " />
        <h4 className="menu_editor_title">Online editor</h4>
      </div>
      <button
        onClick={() => {
          setIsSettingsOpen((preValue) => !preValue);
        }}
        className="menu_item_container"
      >
        <img
          src={SeetingsIcon}
          alt=""
          className="menu_icon rotate-animation "
        />
        <h4 className="menu_item_title first-title">Settings</h4>
      </button>
      <button className="menu_item_container">
        <img src={InfoIocn} alt="" className="menu_icon rotate-animation" />
        <h4 className="menu_item_title second-title">Info</h4>
      </button>
      <button className="menu_item_container">
        <img src={ShareIcon} alt="" className="menu_icon" />
        <h4 className="menu_item_title third-title">Share</h4>
      </button>
    </aside>
  );
}

export default Sidebar;
