// src/components/DomainsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard'
import '../Styles/DomainsPage.css';


const DomainsPage = () => {
  return (
    <div className="container">
      <Header/>
      <div className="container-fluid py-4 bg-light">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">Search Results for "Your Query"</h2>
            <p className="lead">Domain: <strong>Your Selected Domain</strong></p>
          </div>

          <div className="col-12">
            <form className="d-flex mb-4">
              <input className="form-control me-2" type="search" placeholder="Search within this domain..." aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/> 
      </div>
      <Footer/>
    </div>
  );
};

export default DomainsPage;
