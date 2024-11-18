// src/components/VideoPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/VideoPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


const VideoPage = () => {
  return (
    <div className="container">
      <Header/>

      <div className="content-wrapper d-flex">
        <div className="video-section col-md-8">
          <video id="video-player" controls>
            <source src="20600550-uhd_3840_2160_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-description mt-4">
            <h2 className="section-title">Lesson Title</h2>
            <p>Here is a brief description of the lesson content. This will help the user understand the topic covered in this video.</p>
          </div>
        </div>

        <div className="comments-section col-md-4 ms-4">
          <h4 className="section-title">Comments</h4>
          <div className="comment-section">
            <div className="comment">
              <strong>John Doe:</strong> Great tutorial! Helped me a lot.
            </div>
            <div className="comment">
              <strong>Jane Smith:</strong> Can you explain more about the advanced features?
            </div>
            <textarea className="form-control" placeholder="Add your comment"></textarea>
            <button className="btn btn-primary mt-2">Submit</button>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default VideoPage;
