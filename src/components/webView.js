import React from "react";

import "../styles/WebViewNavbar.css";

function WebView({ srcDoc }) {
  return (
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
  );
}

export default WebView;
