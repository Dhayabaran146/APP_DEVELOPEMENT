
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AutoSuggest from './AutoSuggest'; // Assuming this is a custom component for suggestions
import './HomePage.css';

const jobTitles = [
  'Bank Teller', 'Branch Manager', 'Loan Officer', 'Financial Analyst', 'Investment Banker',
  'Credit Analyst', 'Mortgage Advisor', 'Personal Banker', 'Risk Manager', 'Compliance Officer',
  'Financial Advisor', 'Wealth Manager', 'Treasury Analyst', 'Banking Operations Manager', 'Retail Banking Specialist',
  'Corporate Banker', 'Relationship Manager', 'Portfolio Manager', 'Operations Analyst', 'Anti-Money Laundering Specialist', 'Software Engineer', 'Software Developer', 'Application Developer', 'Web Developer', 'Full Stack Developer',
  'Backend Developer', 'Frontend Developer', 'Mobile App Developer', 'DevOps Engineer', 'Cloud Engineer',
  'Database Administrator', 'Systems Analyst', 'Technical Support Specialist', 'Software Architect', 'Quality Assurance Engineer',
  'Machine Learning Engineer', 'Data Scientist', 'UI/UX Designer', 'Product Manager', 'Technical Writer',
  'Game Developer', 'Embedded Systems Engineer', 'IT Project Manager', 'Network Engineer', 'Cybersecurity Analyst','Medical Doctor', 'Nurse', 'Pharmacist', 'Medical Assistant', 'Healthcare Administrator',
  'Physical Therapist', 'Occupational Therapist', 'Speech Therapist', 'Clinical Psychologist', 'Radiologic Technologist',
  'Medical Technologist', 'Laboratory Technician', 'Dentist', 'Veterinarian', 'Optometrist',
  'Healthcare Consultant', 'Health Educator',
];

const locations = [
  'Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad',
  'Jaipur', 'Surat', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Chandigarh',
  'Gurgaon', 'Noida', 'Ghaziabad', 'Bhopal', 'Vadodara', 'Coimbatore', 'Mangalore', 'Patna',
  'Visakhapatnam', 'Amritsar', 'Jabalpur', 'Ranchi', 'Rajkot', 'Nashik', 'Kochi', 'Dehradun',
  'Shimla', 'Jodhpur', 'Udaipur', 'Aurangabad', 'Allahabad', 'Siliguri', 'Bhubaneswar', 'Guwahati',
  'Agra', 'Faridabad', 'Meerut', 'Warangal', 'Rourkela', 'Durgapur', 'Jamshedpur', 'Kota',
  'Bilaspur', 'Raipur', 'Hosur', 'Nellore', 'Tirupati', 'Vijayawada', 'Guntur', 'Trichy','Nellai','Tirunelveli',
  'Tiruchirappalli', 'Salem', 'Erode', 'Cochin', 'Kannur', 'Kottayam', 'Alleppey', 'Ernakulam','Halwa city',
  'Mysuru', 'Bhubaneswar', 'Sambalpur', 'Jammu', 'Srinagar', 'Puducherry', 'Shillong', 'Imphal',
  'Aizawl', 'Agartala', 'Gangtok', 'Dibrugarh', 'Tezpur', 'Silchar', 'Dimapur', 'Kohima',
  'Ludhiana', 'Patiala', 'Jalandhar', 'Mohali', 'Hoshiarpur', 'Amritsar', 'Chandigarh',
  'Kangra', 'Palampur', 'Solan', 'Kullu', 'Manali','Thanjore','Theni'
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleFindJobsClick = () => {
    navigate('/search');
  };

  return (
    <div className="homepage">
      <main className="homepage-main">
        <div className="heading">
          <h1>World Largest Job Searching Portal</h1>
          <h3><span>BGD</span> Find Your Dream Job Today...</h3>
        </div>
        <div className="search-section">
          <AutoSuggest suggestions={jobTitles} placeholder="Job title, or company" />
          <AutoSuggest suggestions={locations} placeholder="City, state 'remote'" />
          <button onClick={handleFindJobsClick}>Find jobs</button>
        </div>
        <div className="job-feed">
          <div className="personalized-feed">
            <p>We're working on your personalized job</p>
            <p>In the meantime, run a search to find your next job.</p>
            <button onClick={handleFindJobsClick}>Find jobs</button>
          </div>
        </div>
        <div className="logo-section">
          <img src="homelogo/download.jpeg" alt="Zomato" />
          <img src="homelogo/hdfc.jpeg" alt="HDFC Bank" />
          <img src="homelogo/tata.jpeg" alt="Tata Motors" />
          <img src="homelogo/urban.png" alt="Urban Company" />
          <img src="homelogo/ola.png" alt="Ola" />
          <img src="homelogo/licius.png" alt="Licious" />
          <img src="homelogo/Swiggy.png" alt="Swiggy" />
        </div>
        <h2 className="class">More than 10L+ companies choose BGD for their hiring solutions.</h2>
        <div className="stats-section">
          <div className="stat">
            <div className="icon">

            </div>
            <p>2Cr+<br />Qualified Candidates</p>
          </div>
          <div className="stat">
            <div className="icon">
             
            </div>
            <p>34L+<br />Interviews per month</p>
          </div>
          <div className="stat">
            <div className="icon">
              
            </div>
            <p>750+<br />Cities in India</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

