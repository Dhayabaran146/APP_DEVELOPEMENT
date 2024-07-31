import React from 'react';
import styles from './AdminDashboard.module.css';

const jobApplicants = [
    { id: 1, name: 'Emma Stone', position: 'Software Engineer', image: 'dash/img1.jpg', details: 'Experienced in React and Node.js' },
    { id: 2, name: 'Jane Smith', position: 'Data Scientist', image: 'dash/img2.jpg', details: 'Expert in Python and Machine Learning' },
    { id: 3, name: 'Michael Brown', position: 'DevOps Engineer', image: 'dash/img3.jpg', details: 'Specializes in AWS and Docker' },
    { id: 4, name: 'Emily Davis', position: 'Product Manager', image: 'dash/img4.jpg', details: 'Skilled in Agile methodologies' },
    { id: 5, name: 'Chris Johnson', position: 'UX Designer', image: 'dash/img5.jpg', details: 'Proficient in Figma and Sketch' },
    { id: 6, name: 'Patricia Wilson', position: 'QA Engineer', image: 'dash/img6.jpg', details: 'Expert in automated testing' },
    { id: 7, name: 'Mia', position: 'Backend Developer', image: 'dash/img7.jpg', details: 'Specializes in Node.js and MongoDB' },
    { id: 8, name: 'Linda Taylor', position: 'Frontend Developer', image: 'dash/img8.jpg', details: 'Experienced in React and Angular' }
  
];

const futureCompanies = [
    { id: 1, name: 'Tech Innovations', partnershipDate: '2024-12-01', image: 'campanies/img1.png' },
    { id: 2, name: 'HealthCorp', partnershipDate: '2025-01-15', image: 'campanies/img2.jpg' },
    { id: 3, name: 'EduTech Solutions', partnershipDate: '2025-03-10', image: 'campanies/img3.jpg' },
    { id: 4, name: 'FinServe', partnershipDate: '2025-04-20', image: 'campanies/img4.jpg' },
    { id: 5, name: 'GreenEnergy Inc.', partnershipDate: '2025-06-05', image: 'campanies/img5.jpg '},
    { id: 6, name: 'AutoTech', partnershipDate: '2025-07-15', image: 'campanies/img6.jpg' },
    { id: 7, name: 'RetailGiant', partnershipDate: '2025-08-25', image: 'campanies/img7.jpg' },
    { id: 8, name: 'HealthCare Plus', partnershipDate: '2025-10-01', image: 'campanies/img8.jpg' }
];

const salaryDetails = [
    { id: 1, position: 'Software Engineer', averageSalary: '$120,000', openings: 10 },
    { id: 2, position: 'Data Scientist', averageSalary: '$110,000', openings: 8 },
    { id: 3, position: 'DevOps Engineer', averageSalary: '$105,000', openings: 5 },
    { id: 4, position: 'Product Manager', averageSalary: '$130,000', openings: 7 },
    { id: 5, position: 'UX Designer', averageSalary: '$95,000', openings: 6 },
    { id: 6, position: 'QA Engineer', averageSalary: '$85,000', openings: 4 },
    { id: 7, position: 'Backend Developer', averageSalary: '$115,000', openings: 9 },
    { id: 8, position: 'Frontend Developer', averageSalary: '$100,000', openings: 11 }
];

const reviews = [
    { id: 1, reviewer: 'Alice', comment: 'Great platform, very user-friendly!', image: 'dash/img9.jpg' },
    { id: 2, reviewer: 'Bob', comment: 'Helped me find my dream job!', image: 'dash/img10.jpg' },
    { id: 3, reviewer: 'Charlie', comment: 'Excellent customer support!', image: 'dash/img11.jpg' },
    { id: 4, reviewer: 'Dani', comment: 'Wide range of job listings.', image: 'dash/img12.jpg' },
    { id: 5, reviewer: 'Emily', comment: 'Highly recommend this platform!', image: 'dash/img13.jpg' },
    { id: 6, reviewer: 'Angelina ', comment: 'Smooth and easy to use.', image: 'dash/img14.jpg' },
    { id: 7, reviewer: 'Tulasi', comment: 'Found my job within a week!', image: 'dash/img15.jpg' },
    { id: 8, reviewer: 'Hank', comment: 'Very efficient and reliable.', image: 'dash/img16.jpg' }
];

const AdminDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.section}>
        <h2>Job Applicants</h2>
        <div className={styles.cardContainer}>
          {jobApplicants.map(applicant => (
            <div key={applicant.id} className={styles.card}>
              <img src={applicant.image} alt={applicant.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3>{applicant.name}</h3>
                <p>{applicant.position}</p>
                <p>{applicant.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Future Company Tie-Ups</h2>
        <div className={styles.cardContainer}>
          {futureCompanies.map(company => (
            <div key={company.id} className={styles.card}>
              <img src={company.image} alt={company.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3>{company.name}</h3>
                <p>Partnership Date: {company.partnershipDate}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Salary Details</h2>
        <div className={styles.cardContainer}>
          {salaryDetails.map(salary => (
            <div key={salary.id} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{salary.position}</h3>
                <p>Average Salary: {salary.averageSalary}</p>
                <p>Openings: {salary.openings}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Help Center Reviews</h2>
        <div className={styles.cardContainer}>
          {reviews.map(review => (
            <div key={review.id} className={styles.card}>
              <img src={review.image} alt={review.reviewer} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3>{review.reviewer}</h3>
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export { AdminDashboard, jobApplicants, futureCompanies, salaryDetails, reviews };
