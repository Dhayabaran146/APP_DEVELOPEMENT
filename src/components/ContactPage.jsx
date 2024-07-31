// import React from 'react';
// import './ContactPage.css';

// const ContactPage = () => {
//     return (
//         <div className="contact-container">
//             <div className="contact-left">
//                 <h1>Contact Us</h1>
//                 <p>Want to start a conversation? We'd love to hear from you.</p>
//                 <div className="contact-info">
//                     <div className="contact-item">
//                         <h3>Corporates, Recruiters, Consultants & Advertisers</h3>
//                         <p><i className="fas fa-envelope"></i> dhaya@bgd.com</p>
//                     </div>
//                     <div className="contact-item">
//                         <h3>Are you a premium member? For any queries...</h3>
//                         <p><i className="fas fa-envelope"></i> work@bgd.com</p>
//                     </div>
//                     <div className="contact-item">
//                         <h3>TPO’s, Placement Officers & Campus Relations</h3>
//                         <p><i className="fas fa-envelope"></i> campus@bgd.com</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="contact-right">
//                 <h2>Fill out the form below and we'll get your questions answered.</h2>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="name">Name*</label>
//                         <input type="text" id="name" placeholder='enter your name' required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="email">Email ID*</label>
//                         <input type="email" id="email" placeholder='ex:abc@gmail.com' required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="mobile">Mobile Number*</label>
//                         <input type="text" id="mobile" placeholder='enter your mobilenumber' required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="subject">Subject*</label>
//                         <select id="subject" required>
//                             <option value="">Select a subject</option>
//                             <option value="corporate">Corporate</option>
//                             <option value="premium">Premium</option>
//                             <option value="tpo">TPO</option>
//                         </select>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="details">Details*</label>
//                         <textarea id="details" required></textarea>
//                     </div>
                    
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;
import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        details: ''
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setFormData({
            name: '',
            email: '',
            mobile: '',
            subject: '',
            details: ''
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-left">
                <h1>Contact Us</h1>
                <p>Want to start a conversation? We'd love to hear from you.</p>
                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Corporates, Recruiters, Consultants & Advertisers</h3>
                        <p><i className="fas fa-envelope"></i> dhaya@bgd.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>Are you a premium member? For any queries...</h3>
                        <p><i className="fas fa-envelope"></i> work@bgd.com</p>
                    </div>
                    <div className="contact-item">
                        <h3>TPO’s, Placement Officers & Campus Relations</h3>
                        <p><i className="fas fa-envelope"></i> campus@bgd.com</p>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <h2>Fill out the form below and we'll get your questions answered.</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="ex:abc@gmail.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number*</label>
                        <input
                            type="text"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject*</label>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a subject</option>
                            <option value="corporate">Corporate</option>
                            <option value="premium">Premium</option>
                            <option value="tpo">TPO</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="details">Details*</label>
                        <textarea
                            id="details"
                            name="details"
                            value={formData.details}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Success!</h2>
                        <p>Your message has been submitted successfully!</p>
                        <button onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactPage;

