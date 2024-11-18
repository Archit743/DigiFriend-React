import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoCard = () => {
  return (
    <div className="video-list">
          <div className="card video-item mb-4">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="https://via.placeholder.com/300x180" className="img-fluid rounded-start" alt="Video Thumbnail" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Video 1: Introduction to the Domain</h5>
                  <p className="card-text">This video introduces the core concepts of the domain and provides an overview of important features.</p>
                  <p className="card-text"><small className="text-muted">Duration: 10 mins</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default VideoCard;
