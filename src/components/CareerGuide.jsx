// CareerGuide.js
import React from 'react';
import './CareerGuide.css';

const articles = [
  {
    title: 'How To Change Careers in 2024',
    category: 'Finding a Job',
    description: 'If you are planning how to change careers, there are several steps you can take to determine when to do so successfully.',
    image: 'homelogo/car1.jpg',
  },
  {
    title: 'How To Prepare for a Job Interview',
    category: 'Interviewing',
    description: 'Interview preparation primarily involves researching the job and the company and thoughtfully considering your answers to the interview questions.',
    image: 'homelogo/car2.jpeg',
  },
  {
    title: 'Apprenticeship Vs. Internship: What Are The Differences?',
    category: 'Finding a Job',
    description: 'Learn the definitions of apprenticeship vs. internship, explore the major differences between them and discover how to find the right programme for you.',
    image: 'homelogo/car3.jpeg',
  },
];

const CareerGuide = () => {
  return (
    <div className="career-guide">
      <h1>BGD Career Guide</h1>
      {/* <h2>Editor's Picks</h2> */}
      <div className="cards-container">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <div className="card-image" style={{ backgroundImage: `url(${article.image})` }}></div>
            <div className="card-content">
              <h3>{article.category}</h3>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerGuide;
