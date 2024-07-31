// import React from 'react';
// import './JobCard.css';

// const JobCard = ({ title, company, experience, salary, location, description, tags, postedDaysAgo }) => {
//   return (
//     <div className="job-card">
//       <div className="job-card-header">
//         <h2 className="job-title">{title}</h2>
//         <p className="company-name">{company}</p>
//       </div>
//       <div className="job-card-details">
//         <p><span className="detail-title">Experience:</span> {experience}</p>
//         <p><span className="detail-title">Salary:</span> {salary}</p>
//         <p><span className="detail-title">Location:</span> {location}</p>
//         <p>{description}</p>
//       </div>
//       <div className="job-card-tags">
//         {tags.map((tag, index) => (
//           <span key={index} className="job-tag">{tag}</span>
//         ))}
//       </div>
//       <div className="job-card-footer">
//         <p>Posted {postedDaysAgo} Days Ago</p>
//       </div>
//     </div>
//   );
// };

// export default JobCard;
// JobCard.js
import React from 'react';
import './JobCard.css';

const JobCard = ({ title, company, experience, salary, location, description, tags, postedDaysAgo }) => {
    return (
        <div className="job-card">
            <div className="job-card-header">
                <h2 className="job-title">{title}</h2>
                <span className="company-name">{company}</span>
            </div>
            <div className="job-card-details">
                <p><span className="detail-title">Experience:</span> {experience}</p>
                <p><span className="detail-title">Salary:</span> {salary}</p>
                <p><span className="detail-title">Location:</span> {location}</p>
                <p><span className="detail-title">Description:</span> {description}</p>
            </div>
            <div className="job-card-tags">
                {tags.map((tag, index) => (
                    <span key={index} className="job-tag">{tag}</span>
                ))}
            </div>
            <div className="job-card-footer">
                <p>Posted {postedDaysAgo} days ago</p>
            </div>
        </div>
    );
};

export default JobCard;

