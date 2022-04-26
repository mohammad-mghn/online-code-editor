import React, { useState } from "react";

import "../styles/editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/default.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";
import "../styles/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

import { Controlled as EditorField } from "react-codemirror2";

import collapseIcon from "../Assists/icons/collapse-icon.png";
import extendIcon from "../Assists/icons/extend-icon.png";

import HTMLLogo from "../Assists/icons/html-icon.png";
import CssLogo from "../Assists/icons/css-icon.png";
import JsLogo from "../Assists/icons/js-icon.png";

function Editor(props) {
  const { onChangeHandler, value, theme, language, logo, header } = props;

  const [IsOpen, setIsOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChangeHandler(value);
  };
  // if (theme === "material"){
  //   document.querySelector(".cm-s-material .CodeMirror-gutters").style.backgroundColor = "aqua !important";
  // }
  return (
    <div className={`editor-main-container ${IsOpen ? `sss` : `s2s`}`}>
      <div className="editor-navigator">
        <div className="editor-title-and-logo">
          <img src={logo} alt="" className="editor-logo" />
          <h4
            className={`edtior-title ${language} ${
              !IsOpen ? "header-display" : ""
            }`}
          >
            {header}
          </h4>
        </div>
        <div className="size-changer-container">
          <img
            src={IsOpen ? collapseIcon : extendIcon}
            alt=""
            className="editor-logo"
            onClick={() => {
              setIsOpen((value) => !value);
            }}
          />
        </div>
      </div>
      <div className="editor-contianer">
        <EditorField
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lineWiseCopyCut: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: theme,
            autoCloseTags: true,
          }}
        />
      </div>
    </div>
  );
}

export default Editor;
