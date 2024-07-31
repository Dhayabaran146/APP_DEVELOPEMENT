import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate , useLocation} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import CombinedMainPage from './components/CombinedMainPage';
import HelpCenter from './components/HelpCenter';
import ContactPage from './components/ContactPage';
import PostJob from './components/PostJob';
import SearchPage from './components/SearchPage';
import JobApplicationForm from './components/JobApplicationForm';
import JobDiscovery from './components/JobDiscovery';
import Footer from './components/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import ResultsPage from './components/ResultsPage';
import CareerGuide from './components/CareerGuide';
import Salaries from './components/Salaries';
import { AdminDashboard, jobApplicants, futureCompanies, salaryDetails, reviews } from './components/AdminDashboard';
import AdminValidationForm from './components/AdminValidationForm';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </Router>
  );
}

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppContent = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' && (
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      )}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<RegisterPage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/companies" element={<CombinedMainPage />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/apply" element={<PrivateRoute isAuthenticated={isAuthenticated}><JobApplicationForm /><JobDiscovery /></PrivateRoute>} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/career-guide" element={<CareerGuide />} />
          <Route path="/salaries" element={<Salaries />} />
          <Route path="/admin" element={<AdminDashboard jobApplicants={jobApplicants} futureCompanies={futureCompanies} salaryDetails={salaryDetails} reviews={reviews} />} />
          <Route path="/adminvalidation" element={<AdminValidationForm />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
