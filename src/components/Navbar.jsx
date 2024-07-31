
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
//     const navigate = useNavigate();

//     const handleSignOut = () => {
//         localStorage.removeItem('isAuthenticated');
//         setIsAuthenticated(false);
//         navigate('/');
//     };

//     return (
//         <header className="navbar-header">
//             <img src="logo 123.jpeg" alt="Logo" />
//             <nav className="navbar">
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/companies">Company</Link></li>
//                     <li><Link to="/about">About us</Link></li>
//                     <li><Link to="/contact">Contact us</Link></li>
//                 </ul>
//             </nav>
//             <div className="auth-links">
//                 {isAuthenticated ? (
//                     <button onClick={handleSignOut} className="signout-button">Sign out</button>
//                 ) : (
//                     <>
//                         <Link to="/login">Sign in</Link>
//                         <Link to="/post-job">Post Job</Link>
//                     </>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;
// Navbar.js
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = ({ isAuthenticated, isAdmin, setIsAuthenticated }) => {
//     const navigate = useNavigate();

//     const handleSignOut = () => {
//         localStorage.removeItem('isAuthenticated');
//         setIsAuthenticated(false);
//         navigate('/');
//     };

//     return (
//         <header className="navbar-header">
//             <img src="logo 123.jpeg" alt="Logo" />
//             <nav className="navbar">
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/companies">Company</Link></li>
//                     <li><Link to="/about">About us</Link></li>
//                     <li><Link to="/contact">Contact us</Link></li>
//                     {isAdmin && <li><Link to="/admin-profile">Admin Profile</Link></li>}
//                 </ul>
//             </nav>
//             <div className="auth-links">
//                 {isAuthenticated ? (
//                     <button onClick={handleSignOut} className="signout-button">Sign out</button>
//                 ) : (
//                     <>
//                         <Link to="/login">Sign in</Link>
//                         <Link to="/post-job">Post Job</Link>
//                     </>
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Admin user icon

const Navbar = ({ isAuthenticated, isAdmin, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <header className="navbar-header">
            <img src="logo 123.jpeg" alt="Logo" />
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/companies">Company</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    {isAdmin && (
                        <li>
                            <Link to="/admin-profile" className="admin-link">
                                <FontAwesomeIcon icon={faUser} />
                                Admin Profile
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
            <div className="auth-links">
                {isAuthenticated ? (
                    <button onClick={handleSignOut} className="signout-button">Sign out</button>
                ) : (
                    <>
                        <Link to="/adminvalidation">Admin-Panel</Link>
                        <Link to="/login">Sign in</Link>
                        <Link to="/post-job">Post Job</Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
