// ResultsPage.js
import React from 'react';
import JobCard from './JobCard'; // Assuming you have JobCard component
import './ResultsPage.css';

const dummyJobs = [
  {
    title: 'Data Scientist',
    company: 'Facebook',
    experience: '3-5 years',
    salary: '$140K',
    location: 'America',
    description: 'Analyze complex data to drive business decisions and develop data-driven strategies...',
    tags: ['Data', 'Science'],
    postedDaysAgo: 8,
  },
  {
    title: 'UX/UI Designer',
    company: 'Microsoft',
    experience: '2-3 years',
    salary: '$115K',
    location: 'Bangalore',
    description: 'Design user-friendly interfaces and create engaging user experiences for various platforms...',
    tags: ['Design', 'UX/UI'],
    postedDaysAgo: 10,
  },
  {
    title: 'Marketing Specialist',
    company: 'Amazon',
    experience: '4 years',
    salary: '$130K',
    location: 'Mumbai',
    description: 'Develop and implement marketing strategies to promote products and increase brand awareness...',
    tags: ['Marketing', 'Strategy'],
    postedDaysAgo: 7,
  },
  {
    title: 'Doctor',
    company: 'HealthCare Hospital',
    experience: '4-6 years',
    salary: '$130K',
    location: 'USA',
    description: 'Provide medical services and care to patients, ensuring high-quality healthcare...',
    tags: ['Healthcare', 'Medical'],
    postedDaysAgo: 7,
  },
  
];


const ResultsPage = () => {
  return (
    <div className="results-page">
      <h1>Job Results</h1>
      {dummyJobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};

export default ResultsPage;
