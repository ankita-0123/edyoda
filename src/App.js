
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import LoginPage from './components/pages/Login';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<CustomNavbar />} />
      </Routes>
      <Home />
    </Router>
  );
}

export default App;