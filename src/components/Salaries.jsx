import React from 'react';
import './Salaries.css';

const Salaries = () => {
    const jobs = [
        { title: "Elementary School Teacher", salary: "₹2,45,300 per year" },
        { title: "Human Resources Specialist", salary: "₹2,66,682 per year" },
        { title: "Accountant", salary: "₹2,59,921 per year" },
        { title: "Customer Care Specialist", salary: "₹2,39,537 per year" },
        { title: "Office Assistant", salary: "₹2,00,575 per year" },
        { title: "Back Office Executive", salary: "₹4,26,014 per year" },
        { title: "Data Entry Clerk", salary: "₹2,62,530 per year" },
        { title: "Graphic Designer", salary: "₹2,70,623 per year" },
        { title: "Front Desk Manager", salary: "₹2,17,338 per year" },
        { title: " Full Stack Developer", salary: "₹5,77,390 per year" }
    ];

    return (
        <div className="salaries-container">
            <div className="industry-select">
                <label htmlFor="industry">Choose an industry</label>
                <select id="industry">
                    <option value="all">All Industries</option>
                    <option value="teacher">Elementary School Teacher</option>
                    <option value="hr">Human Resources Specialist</option>
                    <option value="accountant">Accountant</option>
                    <option value="customer-care">Customer Care Specialist</option>
                    <option value="office-assistant">Office Assistant</option>
                    <option value="back-office">Back Office Executive</option>
                    <option value="data-entry">Data Entry Clerk</option>
                    <option value="graphic-designer">Graphic Designer</option>
                    <option value="front-desk">Front Desk Manager</option>
                    
                </select>
            </div>
            <div className="job-cards">
                {jobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <h3>{job.title}</h3>
                        <p className="salary">Average salary {job.salary}</p>
                        <a href="/job-openings" className="job-openings">Job openings</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Salaries;
