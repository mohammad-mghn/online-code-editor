import React, { useState } from "react";

import "../styles/editor.css";
import "../styles/theme/material.css";

import collapseIcon from "../Assists/icons/collapse-icon.png";
import extendIcon from "../Assists/icons/extend-icon.png";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/oceanic-next.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/theme/idea.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

import { Controlled as EditorField } from "react-codemirror2";

function Editor(props) {
  const { onChangeHandler, defaultValue, value, theme, language, logo, header } =
    props;

  const [IsOpen, setIsOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChangeHandler(value);
  };

  return (
    <div
      className={`editor-main-container ${IsOpen ? `extended` : `collapsed`}`}
    >
      <div className="editor-navigator">
        <div className="editor-title-and-logo">
          <img src={logo} alt="" className="editor-logo" />
          <h4
            className={`edtior-title ${language} ${
              !IsOpen && "header-display"
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
            value: defaultValue,
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
