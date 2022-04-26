import Sidebar from "./sidebar";
import WebView from "./webView";
import Editor from "./editor";

function OnlineEditor() {
  return (
    <div>
      <Sidebar />
      <main>
        <section>
          <Editor />
          <Editor />
          <Editor />
        </section>
        <WebView />
      </main>
      asdfasdfasdfljkahsdkjfhajskdfhajsdf
    </div>
  );
}

export default OnlineEditor;
