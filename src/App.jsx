// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./Styles/HomePage.css";
// import "./Styles/DomainsPage.css";
// import "./Styles/VideoPage.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DomainsPage from './pages/DomainsPage.jsx';
import VideoPage from './pages/VideoPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/domains" element={<DomainsPage />} />
        <Route path="/videos" element={<VideoPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
