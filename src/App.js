import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./assets/css/resets.css";
import "./assets/css/stylegide.css";
import "./assets/css/common.css";
import AgreePage from "./pages/AgreePage";
import Home from "./pages/Home";
import WithDrawalPage from "./pages/WithDrawalPage";
import Header from "./components/Header";
import Qna from "./pages/qna/QnaPage";

function App() {
  const [pageName, setPageName] = useState("");

  const onPageName = (page) => {
    setPageName(page);
  };
  return (
    <div className="App">
      <Header pageName={pageName} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home onPageName={onPageName} />} />
          <Route
            path="/terms"
            element={<AgreePage onPageName={onPageName} />}
          />
          <Route
            path="/drawal"
            element={<WithDrawalPage onPageName={onPageName} />}
          />
          <Route
            path="/qna"
            element={<Qna onPageName={onPageName} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
