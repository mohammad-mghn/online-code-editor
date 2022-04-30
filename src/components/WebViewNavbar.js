import React from "react";

import "../styles/WebViewNavbar.css";

import Reload from "../Assists/icons/reload-icon.png";

const WebViewNavbar = (props) => {
  const { html, css, js, setIsEditorVisible, setIsOutputVisible, setSrcDoc } =
    props;
  return (
    <div className="output-navigator">
      <button
        onClick={() => {
          // Math.random() is need for forcing State to update but should
          // be invisible so we have hidden attribute 😉
          setSrcDoc(
            `
            <html>
                  <body>
                        <div hidden>${Math.random()}</div> 
                        ${html}
                  </body>
                  <style>
                        ${css}
                  </style>
                  <script>
                        ${js}
                  </script>
            </html>
            `
          );
        }}
        className="reload-container"
      >
        <img src={Reload} alt="reload-img" className="reload-img" />
      </button>
      <div className="output-controller-container">
        <div
          className="output-controller"
          onClick={() => {
            setIsOutputVisible((preValue) => !preValue);
          }}
        ></div>
        <div
          className="output-controller"
          onClick={() => {
            setIsEditorVisible((preValue) => !preValue);
          }}
        ></div>
        <div
          className="output-controller"
          onClick={() => {
            var newWindow = window.open();
            newWindow.document.write(
              "<body>" +
                html +
                "</body>" +
                "<style>" +
                css +
                "</style>" +
                "<script>" +
                js +
                "</script>"
            );
          }}
        ></div>
      </div>
    </div>
  );
};

export default WebViewNavbar;
