
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css'; 
// import { FaFacebook, FaTwitter, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="homepage-footer">
//       <ul className="footer-links">
//         <li><Link to="/career-guide">Career Guide</Link></li> {/* Updated link */}
//         <li><Link to="/search">Browse Jobs</Link></li>
//         <li><Link to="/companies">Browse Companies</Link></li>
//         <li><Link to="/salaries">Salaries</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/helpcenter">Help Center</Link></li>
//       </ul>
//       <div className="footer-social">
//         <p>Follow us</p>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//           <FaTwitter />
//         </a>
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//           <FaFacebook />
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//           <FaInstagram />
//         </a>
//         <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
//           <FaWhatsappSquare />
//         </a>
//       </div>
//       <div className="footer-legal">
//         <p>© 2024 BGD</p>
//         <p><Link to="/accessibility">Accessibility</Link></p>
//         <p><Link to="/privacy">Privacy Centre and Ad Choices</Link></p>
//         <p><Link to="/terms">Terms</Link></p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="homepage-footer">
      <ul className="footer-links">
        <li><Link to="/career-guide">Career Guide</Link></li>
        <li><Link to="/search">Browse Jobs</Link></li>
        <li><Link to="/companies">Browse Companies</Link></li>
        <li><Link to="/salaries">Salaries</Link></li> {/* Added Salaries link */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/helpcenter">Help Center</Link></li>
      </ul>
      <div className="footer-social">
        <p>Follow us</p>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaWhatsappSquare />
        </a>
      </div>
      <div className="footer-legal">
        <p>© 2024 BGD</p>
        <p><Link to="/accessibility">Accessibility</Link></p>
        <p><Link to="/privacy">Privacy Centre and Ad Choices</Link></p>
        <p><Link to="/terms">Terms</Link></p>
      </div>
    </footer>
  );
}

export default Footer;
