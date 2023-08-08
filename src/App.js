import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./assets/css/resets.css";
import "./assets/css/stylegide.css";
import "./assets/css/common.css";
import AgreePage from "./pages/AgreePage";
import Home from "./pages/Home";
import WithDrawalPage from "./pages/WithDrawalPage";
import Header from "./components/Navigation";
import FaqList from "./pages/faq/FaqList";
import FaqDetail from "./pages/faq/FaqDetail";
import FaqImportDetail from "./pages/faq/FaqImportDetail";
import QnaList from "./pages/qna/QnaList";
import QnaDetail from "./pages/qna/QnaDetail";
import QnaWrite from "./pages/qna/QnaWrite";

function App() {
  const [pageName, setPageName] = useState("");
  const [headerUi, setHeaderUi] = useState({});

  const onPageName = (page) => {
    setPageName(page);
  };
  const onHeaderUi = (ui) => {
    setHeaderUi(ui);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header pageName={pageName} headerUi={headerUi} />
        <Routes>
          <Route
            path="/"
            element={<Home onPageName={onPageName} onHeaderUi={onHeaderUi} />}
          />
          <Route
            path="/terms"
            element={
              <AgreePage onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
          <Route
            path="/drawal"
            element={
              <WithDrawalPage onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
          <Route
            path="/faq"
            element={
              <FaqList onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
          <Route
            path="/faq/:id"
            element={
              <FaqDetail onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
            <Route
              path="/faqimport/:id"
              element={
                <FaqImportDetail onPageName={onPageName} onHeaderUi={onHeaderUi} />
              }
            />
          <Route
            path="/qna"
            element={
              <QnaList onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
          <Route
            path="/qna/:id"
            element={
              <QnaDetail onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
          <Route
            path="/qna/write"
            element={
              <QnaWrite onPageName={onPageName} onHeaderUi={onHeaderUi} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
