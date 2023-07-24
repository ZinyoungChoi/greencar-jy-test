import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AgreePage from './pages/AgreePage';
import Home from './pages/Home';
import WithDrawalPage from './pages/WithDrawalPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agree' element={<AgreePage />} />
          <Route path='/drawal' element={<WithDrawalPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
