import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
