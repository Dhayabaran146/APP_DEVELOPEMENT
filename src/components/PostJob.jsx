import React, { useState } from 'react';
import './PostJob.css'; 

const PostJob = () => {
  const steps = [
    {
      id: 1,
      title: "Post a Job",
      description: "Tell us what you need in a candidate in just 5 minutes.",
      image: "job1.jpeg"
    },
    {
      id: 2,
      title: "Get Verified",
      description: "Our team will call to verify your employer account.",
      image: "verified.jpg"
    },
    {
      id: 3,
      title: "Get calls. Hire.",
      description: "You will get calls from relevant candidates within one hour or call them directly from our candidate database.",
      image: "verified1.jpg"
    }
  ];

  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!jobTitle || !companyName || !location || !description || !salary) {
      setMessage('Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    setMessage('Job posted successfully!');

    // Reset form fields
    setJobTitle('');
    setCompanyName('');
    setLocation('');
    setDescription('');
    setSalary('');

    setIsLoading(false);
  };

  return (
    <div className="post-job">
      <h2>Get started in 3 easy steps</h2>
      <div className="steps-container">
        {steps.map(step => (
          <div key={step.id} className="step">
            <img src={step.image} alt={step.title} className="step-image" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="post-job-container">
        <h2>Post a Job</h2>
        <form onSubmit={handleSubmit} className="post-job-form">
          <div className="form-group">
            <label>Job Title:</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Company Name:</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Salary:</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Posting...' : 'Post Job'}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default PostJob;
