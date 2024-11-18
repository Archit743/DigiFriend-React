// src/components/Header.js
import LogIn from './LogIn';
import Register from './Register';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          Digifriend
        </a>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><Link to="/" className="nav-link px-2">Home</Link></li>
        <li><Link to="/domains" className="nav-link px-2">Domains</Link></li>
        <li><Link to="/videos" className="nav-link px-2">Videos</Link></li>
        <li><Link to="/admin" className="nav-link px-2">Admin</Link></li>
      </ul>
      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2" onClick={() => setOpen(true)}>Login</button>
        <button type="button" className="btn btn-primary" onClick={() => setOpen2(true)}>Register</button>
      </div>
      {open && <LogIn setOpen = {setOpen}/>}
    {open2 && <Register setOpen={setOpen} setOpen2 = {setOpen2}/>} 
    </header>
  );
};

export default Header;
