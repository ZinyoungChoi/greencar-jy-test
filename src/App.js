import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AgreePage from './pages/AgreePage';
import Home from './pages/Home';
import WithDrawalPage from './pages/WithDrawalPage';
import Header from './components/Header';

function App() {
  const onPageName = (page)=> {
    console.log(page)
  }
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home onPageName={onPageName} />} />
          <Route path='/agree' element={<AgreePage onPageName={onPageName} />} />
          <Route path='/drawal' element={<WithDrawalPage onPageName={onPageName} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
