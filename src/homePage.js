import React, { useState, useEffect } from "react";

import Sidebar from "./components/sidebar";
import Editor from "./components/editor";
import Settings from "./components/Settings";

import HTMLLogo from "./Assists/icons/html-icon.png";
import CssLogo from "./Assists/icons/css-icon.png";
import JsLogo from "./Assists/icons/js-icon.png";
import Reload from "./Assists/icons/reload-icon.png";

function HomePage() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const [IsOutputVisible, setIsOutputVisible] = useState(true);
  const [IsEditorVisible, setIsEditorVisible] = useState(true);

  const [IsSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
          
        `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <>
      <header>
        <Sidebar setIsSettingsOpen={setIsSettingsOpen} />
      </header>
      <div className="editor-section">
        <div
          style={{
            flexBasis:
              IsOutputVisible && IsEditorVisible
                ? "47.5%"
                : IsEditorVisible
                ? "100%"
                : IsOutputVisible
                ? "0%"
                : "100%",
            maxHeight:
              IsOutputVisible && IsEditorVisible
                ? "47.5%"
                : IsEditorVisible
                ? "93%"
                : IsOutputVisible
                ? "10%"
                : "93%",
          }}
          className="editors"
        >
          <Editor
            onChangeHandler={setHtml}
            value={html}
            theme={"material"}
            language={"xml"}
            logo={HTMLLogo}
            header={"HTML"}
          />
          <Editor
            onChangeHandler={setCss}
            value={css}
            theme={"material"}
            language={"css"}
            logo={CssLogo}
            header={"Css"}
          />
          <Editor
            onChangeHandler={setJs}
            value={js}
            theme={"material"}
            language={"javascript"}
            logo={JsLogo}
            header={"Javascript"}
          />
        </div>
        <div className="output-container">
          <div className="output-navigator">
            <button
              onClick={() => {
                setSrcDoc(
                  `
                  <html>
                  <body>
                   <div hidden>${Math.random()}</div> 
                   ${html}
                  </body>
                <style>${css}</style>
                <script>${js}</script>
              </html>
                  `
                );
              }}
              className="reload-container"
            >
              <img src={Reload} alt="" className="reload-img" />
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
          {IsOutputVisible && (
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="1"
              width="100%"
              height="92.5%"
              className="output"
              onClick={() => {
                window.open(srcDoc);
              }}
            />
          )}
        </div>
        {IsSettingsOpen && <Settings setIsSettingsOpen={setIsSettingsOpen} />}
      </div>
    </>
  );
}

export default HomePage;
