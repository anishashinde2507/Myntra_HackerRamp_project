import './styles.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ClothFit from './components/ClothFit';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import StyleMatch from './components/StyleMatch';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/style-match" element={<StyleMatch />} />
          <Route path="/cloth-fit" element={<ClothFit />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
