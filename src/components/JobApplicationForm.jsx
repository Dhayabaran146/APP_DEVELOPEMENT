
// import React, { useState } from 'react';
// import './JobApplicationForm.css';

// const JobApplicationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     address: '',
//     education: '',
//     workExperience: '',
//     coverLetter: '',
//     resume: null,
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'file' ? files[0] : value,
//     }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.fullName) errors.fullName = 'Full name is required';
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.phone) errors.phone = 'Phone number is required';
//     if (!formData.address) errors.address = 'Address is required';
//     if (!formData.education) errors.education = 'Education details are required';
//     if (!formData.workExperience) errors.workExperience = 'Work experience is required';
//     if (!formData.coverLetter) errors.coverLetter = 'Cover letter is required';
//     if (!formData.resume) errors.resume = 'Resume is required';
//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setShowPopup(false); 
//     } else {
//       setErrors({});
//       console.log('Form submitted', formData);
//       setShowPopup(true); 
//       setSubmitted(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="job-application-form">
//       <h1>Job Application</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Full Name
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Enter your full name"
//           />
//           {errors.fullName && <p className="error">{errors.fullName}</p>}
//         </label>
        
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email address"
//           />
//           {errors.email && <p className="error">{errors.email}</p>}
//         </label>
        
//         <label>
//           Phone Number
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Enter your phone number"
//           />
//           {errors.phone && <p className="error">{errors.phone}</p>}
//         </label>
        
//         <label>
//           Address
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             placeholder="Enter your address"
//           />
//           {errors.address && <p className="error">{errors.address}</p>}
//         </label>
        
//         <label>
//           Education
//           <textarea
//             name="education"
//             value={formData.education}
//             onChange={handleChange}
//             placeholder="Enter your education details"
//           />
//           {errors.education && <p className="error">{errors.education}</p>}
//         </label>
        
//         <label>
//           Work Experience
//           <textarea
//             name="workExperience"
//             value={formData.workExperience}
//             onChange={handleChange}
//             placeholder="Enter your work experience"
//           />
//           {errors.workExperience && <p className="error">{errors.workExperience}</p>}
//         </label>
        
//         <label>
//           Cover Letter
//           <textarea
//             name="coverLetter"
//             value={formData.coverLetter}
//             onChange={handleChange}
//             placeholder="Write your cover letter"
//           />
//           {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}
//         </label>
        
//         <label>
//           Resume
//           <input
//             type="file"
//             name="resume"
//             accept=".pdf,.doc,.docx"
//             onChange={handleChange}
//           />
//           {errors.resume && <p className="error">{errors.resume}</p>}
//         </label>

//         <button type="submit">Submit Application</button>
//       </form>

     
//       {showPopup && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <h2>Success!</h2>
//             <p>Your application has been submitted successfully!</p>
//             <button onClick={handleClosePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobApplicationForm;


import React, { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: '',
    coverLetter: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName) errors.fullName = 'Full name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.education) errors.education = 'Education details are required';
    if (!formData.workExperience) errors.workExperience = 'Work experience is required';
    if (!formData.coverLetter) errors.coverLetter = 'Cover letter is required';
    if (!formData.resume) errors.resume = 'Resume is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setShowPopup(false); // Hide popup if there are validation errors
    } else {
      setErrors({});
      console.log('Form submitted', formData);
      setShowPopup(true); // Show popup on successful submission
      setSubmitted(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      workExperience: '',
      coverLetter: '',
      resume: null,
    });
    setSubmitted(false);
  };

  return (
    <div className="job-application-form">
      <h1>Job Application</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </label>
        
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>
        
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </label>
        
        <label>
          Address
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </label>
        
        <label>
          Education
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Enter your education details"
          />
          {errors.education && <p className="error">{errors.education}</p>}
        </label>
        
        <label>
          Work Experience
          <textarea
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            placeholder="Enter your work experience"
          />
          {errors.workExperience && <p className="error">{errors.workExperience}</p>}
        </label>
        
        <label>
          Cover Letter
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Write your cover letter"
          />
          {errors.coverLetter && <p className="error">{errors.coverLetter}</p>}
        </label>
        
        <label>
          Resume
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
          {errors.resume && <p className="error">{errors.resume}</p>}
        </label>

        <button type="submit">Submit Application</button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Success!</h2>
            <p>Your application has been submitted successfully!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;


