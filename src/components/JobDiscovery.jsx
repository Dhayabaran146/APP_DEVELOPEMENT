import React, { useState } from 'react';
import './JobDiscovery.css'; 

const JobDiscovery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const jobCategories = [
    { title: 'Full Stack Developer', jobs: '14.5K+ Jobs' },
    { title: 'Mobile / App Developer', jobs: '2.1K+ Jobs' },
    { title: 'Front End Developer', jobs: '3.1K+ Jobs' },
    { title: 'DevOps Engineer', jobs: '2K+ Jobs' },
    { title: 'Engineering Manager', jobs: '1.1K+ Jobs' },
    { title: 'Technical Lead', jobs: '9.4K+ Jobs' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobCategories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobCategories.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="job-discovery">
      <div className="job-discovery-header">
        <img src="asset-selection-.jpg" alt="Discover Jobs" className="job-discovery-image" />
        <h2>Discover jobs across popular roles</h2>
        <p>Select a role and we'll show you relevant jobs for it!</p>
      </div>
      <div className="job-categories">
        {jobCategories.slice(currentIndex, currentIndex + 3).map((category, index) => (
          <div key={index} className="job-category">
            <h3>{category.title}</h3>
            <p>{category.jobs}</p>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default JobDiscovery;