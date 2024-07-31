import React, { useState } from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
    const [activeSection, setActiveSection] = useState(null);

    const handleSectionClick = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="help-center-container">
            <p className="help-center-description">
                Welcome to the Help Center! Here, you’ll find all the resources and support you need to make the most of our job searching portal.
            </p>
            <div className="help-center-sections">
                <div className="help-section" onClick={() => handleSectionClick('getting-started')}>
                    <h2 className="help-section-title">Getting Started</h2>
                    {activeSection === 'getting-started' && (
                        <p className="help-section-description">
                            Learn how to create an account, set up your profile, and start searching for jobs.
                            
                        </p>
                        

                    )}
                </div>
                <div className="help-section" onClick={() => handleSectionClick('job-search-tips')}>
                    <h2 className="help-section-title">Job Search Tips</h2>
                    {activeSection === 'job-search-tips' && (
                        <p className="help-section-description">
                            Discover the best practices for job searching, including how to use filters, save searches, and apply for jobs.
                        </p>
                    )}
                </div>
                <div className="help-section" onClick={() => handleSectionClick('account-management')}>
                    <h2 className="help-section-title">Account Management</h2>
                    {activeSection === 'account-management' && (
                        <p className="help-section-description">
                            Find out how to manage your account settings, update your profile, and reset your password.
                        </p>
                    )}
                </div>
                <div className="help-section" onClick={() => handleSectionClick('technical-support')}>
                    <h2 className="help-section-title">Technical Support</h2>
                    {activeSection === 'technical-support' && (
                        <p className="help-section-description">
                            Get help with technical issues, including troubleshooting and reporting bugs.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HelpCenter;
