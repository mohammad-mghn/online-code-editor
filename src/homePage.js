import React, { useState, useEffect } from "react";

import Uselocalstorge from "./hooks/useLocalStorge";
import useTheme from "./hooks/useTheme";

import Sidebar from "./components/sidebar";
import Editor from "./components/editor";
import WebViewNavbar from "./components/WebViewNavbar";
import WebView from "./components/webView";
import Settings from "./components/Settings";

import HTMLLogo from "./Assists/icons/html-icon.png";
import CssLogo from "./Assists/icons/css-icon.png";
import JsLogo from "./Assists/icons/js-icon.png";

import "./styles/homePage.css";

function HomePage() {
  const [html, setHtml] = Uselocalstorge("html", "");
  const [css, setCss] = Uselocalstorge("css", "");
  const [js, setJs] = Uselocalstorge("js", "");

  // Codemirror requires different states for
  // default value (restored value from locaStorge)
  // so we need state so it won't update
  // like regular variables.
  const [htmlDefault] = useState(html);
  const [cssDefault] = useState(css);
  const [jsDefault] = useState(js);

  const [srcDoc, setSrcDoc] = useState("");

  const [IsOutputVisible, setIsOutputVisible] = useState(true);
  const [IsEditorVisible, setIsEditorVisible] = useState(true);

  const [IsSettingsPopUpOpen, setIsSettingsPopUpOpen] = useState(false);

  const [themeSelected, setThemeSelected] = useTheme("material");

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
    }, 500);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  // this part is for Ctrl+S for saving
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey && e.key === "s") || e.key === "r") {
      e.preventDefault();
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
    }
  });

  return (
    <>
      <Sidebar setIsSettingsPopUpOpen={setIsSettingsPopUpOpen} />

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
            defaultValue={htmlDefault}
            theme={themeSelected}
            language={"xml"}
            logo={HTMLLogo}
            header={"HTML"}
          />
          <Editor
            onChangeHandler={setCss}
            value={css}
            defaultValue={cssDefault}
            theme={themeSelected}
            language={"css"}
            logo={CssLogo}
            header={"Css"}
          />
          <Editor
            onChangeHandler={setJs}
            value={js}
            defaultValue={jsDefault}
            theme={themeSelected}
            language={"javascript"}
            logo={JsLogo}
            header={"Javascript"}
          />
        </div>

        <div className="output-container">
          <WebViewNavbar
            srcDoc={srcDoc}
            html={html}
            css={css}
            js={js}
            setIsOutputVisible={setIsOutputVisible}
            setIsEditorVisible={setIsEditorVisible}
          />
          {IsOutputVisible && <WebView srcDoc={srcDoc} />}
        </div>

        {IsSettingsPopUpOpen && (
          <Settings
            setIsSettingsPopUpOpen={setIsSettingsPopUpOpen}
            themeSelected={themeSelected}
            setThemeSelected={setThemeSelected}
          />
        )}
      </div>
    </>
  );
}

export default HomePage;
