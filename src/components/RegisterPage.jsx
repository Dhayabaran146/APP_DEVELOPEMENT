
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './RegisterPage.css';

// // const RegisterPage = ({ setIsAuthenticated }) => {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [workStatus, setWorkStatus] = useState('');
// //   const navigate = useNavigate();

// //   const handleRegister = () => {
// //     if (!fullName || !email || !password || !mobile || !workStatus) {
// //       alert('Please fill in all fields.');
// //       return;
// //     }

// //     // Registration logic here
// //     console.log('Registering with', { fullName, email, password, mobile, workStatus });
// //     localStorage.setItem('isAuthenticated', 'true');
// //     setIsAuthenticated(true);
// //     navigate('/');
// //   };

// //   return (
// //     <div className="register-container">
// //       <div className="left-panel">
// //         <div className="info">
// //          <img src="./pic.jpeg" style={{height:"200px",width:"300px",borderRadius:"5px"}}/>
// //           <h2 >BGD for you</h2>
// //           <ul>
// //             <li>Build your profile and let recruiters find you</li>
// //             <li>Get job postings delivered right to your email</li>
// //             <li>Find a job and grow your career</li>
// //           </ul>
// //         </div>
// //       </div>
// //       <div className="right-panel">
// //         <h1>Create your profile</h1>
// //         <form>
// //           <label>
// //             Full name*
// //             <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="What is your name?" />
// //           </label>
// //           <label>
// //             Email ID*
// //             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email ID" />
// //           </label>
// //           <label>
// //             Password*
// //             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 6 characters" />
// //           </label>
// //           <label>
// //             Mobile number*
// //             <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="+91 Enter your mobile number" />
// //           </label>
// //           <label>
// //             Work status*
// //             <div className="work-status-options">
// //               <input type="radio" id="experienced" name="workStatus" value="experienced" onChange={(e) => setWorkStatus(e.target.value)} />
// //               <label htmlFor="experienced">I'm experienced</label>
// //               <input type="radio" id="fresher" name="workStatus" value="fresher" onChange={(e) => setWorkStatus(e.target.value)} />
// //               <label htmlFor="fresher">I'm a fresher</label>
// //             </div>
// //           </label>
// //           <label>
// //             <input type="checkbox" /> Send me important updates via SMS, email, and WhatsApp
// //           </label>
// //           <button type="button" onClick={handleRegister}>Register now</button>
// //         </form>
// //         <div className="social-login">
// //           <p>Or</p>
// //           <button className="google-login">Continue with Google</button>
// //           <div className="login-link">
// //             <p>Already have an account? <Link to="/login">Login</Link></p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios'; // Import Axios
// // import './RegisterPage.css';

// // const RegisterPage = ({ setIsAuthenticated }) => {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [workStatus, setWorkStatus] = useState('');
// //   const navigate = useNavigate();

// //   const handleRegister = async () => {
// //     if (!fullName || !email || !password || !mobile || !workStatus) {
// //       alert('Please fill in all fields.');
// //       return;
// //     }

// //     try {
// //       // Registration logic with Axios
// //       const response = await axios.post('http://localhost:8080/register', {
// //         fullName,
// //         email,
// //         password,
// //         mobile,
// //         workStatus
// //       });

// //       console.log('Registration response:', response.data);
// //       localStorage.setItem('isAuthenticated', 'true');
// //       setIsAuthenticated(true);
// //       navigate('/');
// //     } catch (error) {
// //       console.error('Registration error:', error);
// //       if (error.response) {
// //         // Server responded with a status other than 2xx
// //         alert(`Registration failed: ${error.response.data.message || error.response.statusText}`);
// //       } else if (error.request) {
// //         // Request was made but no response received
// //         alert('No response from server. Please try again later.');
// //       } else {
// //         // Something happened while setting up the request
// //         alert('Error setting up registration request.');
// //       }
// //     }
// //   };

// //   return (
// //     <div className="register-container">
// //       <div className="left-panel">
// //         <div className="info">
// //           <img src="./pic.jpeg" alt="BGD" style={{ height: '200px', width: '300px', borderRadius: '5px' }} />
// //           <h2>BGD for you</h2>
// //           <ul>
// //             <li>Build your profile and let recruiters find you</li>
// //             <li>Get job postings delivered right to your email</li>
// //             <li>Find a job and grow your career</li>
// //           </ul>
// //         </div>
// //       </div>
// //       <div className="right-panel">
// //         <h1>Create your profile</h1>
// //         <form>
// //           <label>
// //             Full name*
// //             <input
// //               type="text"
// //               value={fullName}
// //               onChange={(e) => setFullName(e.target.value)}
// //               placeholder="What is your name?"
// //             />
// //           </label>
// //           <label>
// //             Email ID*
// //             <input
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Enter your Email ID"
// //             />
// //           </label>
// //           <label>
// //             Password*
// //             <input
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               placeholder="Minimum 6 characters"
// //             />
// //           </label>
// //           <label>
// //             Mobile number*
// //             <input
// //               type="tel"
// //               value={mobile}
// //               onChange={(e) => setMobile(e.target.value)}
// //               placeholder="+91 Enter your mobile number"
// //             />
// //           </label>
// //           <label>
// //             Work status*
// //             <div className="work-status-options">
// //               <input
// //                 type="radio"
// //                 id="experienced"
// //                 name="workStatus"
// //                 value="experienced"
// //                 onChange={(e) => setWorkStatus(e.target.value)}
// //               />
// //               <label htmlFor="experienced">I'm experienced</label>
// //               <input
// //                 type="radio"
// //                 id="fresher"
// //                 name="workStatus"
// //                 value="fresher"
// //                 onChange={(e) => setWorkStatus(e.target.value)}
// //               />
// //               <label htmlFor="fresher">I'm a fresher</label>
// //             </div>
// //           </label>
// //           <label>
// //             <input type="checkbox" />
// //             Send me important updates via SMS, email, and WhatsApp
// //           </label>
// //           <button type="button" onClick={handleRegister}>
// //             Register now
// //           </button>
// //         </form>
// //         <div className="social-login">
// //           <p>Or</p>
// //           <button className="google-login">Continue with Google</button>
// //           <div className="login-link">
// //             <p>
// //               Already have an account? <Link to="/login">Login</Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RegisterPage;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RegisterPage.css';

// const RegisterPage = ({ setIsAuthenticated }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [workStatus, setWorkStatus] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     if (!fullName || !email || !password || !mobile || !workStatus) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/register', {
//         fullName,
//         email,
//         password,
//         mobile,
//         workStatus
//       });

//       console.log('Registration response:', response.data);
//       localStorage.setItem('isAuthenticated', 'true');
//       setIsAuthenticated(true);
//       navigate('/');
//     } catch (error) {
//       console.error('Registration error:', error);
//       if (error.response) {
//         alert(`Registration Sucess: ${error.response.data.message || error.response.statusText}`);
//       } else if (error.request) {
//         alert('No response from server. Please try again later.');
//       } else {
//         alert('Error setting up registration request.');
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="left-panel">
//         <div className="info">
//           <img src="./pic.jpeg" alt="BGD" style={{ height: '200px', width: '300px', borderRadius: '5px' }} />
//           <h2>BGD for you</h2>
//           <ul>
//             <li>Build your profile and let recruiters find you</li>
//             <li>Get job postings delivered right to your email</li>
//             <li>Find a job and grow your career</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right-panel">
//         <h1>Create your profile</h1>
//         <form>
//           <label>
//             Full name*
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="What is your name?"
//             />
//           </label>
//           <label>
//             Email ID*
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your Email ID"
//             />
//           </label>
//           <label>
//             Password*
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Minimum 6 characters"
//             />
//           </label>
//           <label>
//             Mobile number*
//             <input
//               type="tel"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="+91 Enter your mobile number"
//             />
//           </label>
//           <label>
//             Work status*
//             <div className="work-status-options">
//               <input
//                 type="radio"
//                 id="experienced"
//                 name="workStatus"
//                 value="experienced"
//                 onChange={(e) => setWorkStatus(e.target.value)}
//               />
//               <label htmlFor="experienced">I'm experienced</label>
//               <input
//                 type="radio"
//                 id="fresher"
//                 name="workStatus"
//                 value="fresher"
//                 onChange={(e) => setWorkStatus(e.target.value)}
//               />
//               <label htmlFor="fresher">I'm a fresher</label>
//             </div>
//           </label>
//           <label>
//             <input type="checkbox" />
//             Send me important updates via SMS, email, and WhatsApp
//           </label>
//           <button type="button" onClick={handleRegister}>
//             Register now
//           </button>
//         </form>
//         <div className="social-login">
//           <p>Or</p>
//           <button className="google-login">Continue with Google</button>
//           <div className="login-link">
//             <p>
//               Already have an account? <Link to="/login">Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RegisterPage.css';

// const RegisterPage = ({ setIsAuthenticated }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [workStatus, setWorkStatus] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     if (!fullName || !email || !password || !mobile || !workStatus) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8081/register', {
//         fullName,
//         email,
//         password,
//         mobile,
//         workStatus
//       });

//       console.log('Registration response:', response.data);
//       localStorage.setItem('isAuthenticated', 'true');
//       setIsAuthenticated(true);
//       navigate('/');
//     } 
//     catch (error) {
//       console.error('Registration error:', error);

//       if (error.response) {
//         // Server responded with a status other than 2xx
//         console.log('Error response data:', error.response.data);
//         console.log('Error response status:', error.response.status);
//         alert(`Registration failed: ${error.response.data.message || error.response.statusText}`);
//       } else if (error.request) {
//         // Request was made but no response received
//         console.log('Error request:', error.request);
//         alert('No response from server. Please try again later.');
//       } else {
//         // Something happened while setting up the request
//         console.log('Error message:', error.message);
//         alert('Error setting up registration request.');
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="left-panel">
//         <div className="info">
//           <img src="./pic.jpeg" alt="BGD" style={{ height: '200px', width: '300px', borderRadius: '5px' }} />
//           <h2>BGD for you</h2>
//           <ul>
//             <li>Build your profile and let recruiters find you</li>
//             <li>Get job postings delivered right to your email</li>
//             <li>Find a job and grow your career</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right-panel">
//         <h1>Create your profile</h1>
//         <form>
//           <label>
//             Full name*
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="What is your name?"
//             />
//           </label>
//           <label>
//             Email ID*
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your Email ID"
//             />
//           </label>
//           <label>
//             Password*
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Minimum 6 characters"
//             />
//           </label>
//           <label>
//             Mobile number*
//             <input
//               type="tel"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="+91 Enter your mobile number"
//             />
//           </label>
//           <label>
//             Work status*
//             <div className="work-status-options">
//               <input
//                 type="radio"
//                 id="experienced"
//                 name="workStatus"
//                 value="experienced"
//                 onChange={(e) => setWorkStatus(e.target.value)}
//               />
//               <label htmlFor="experienced">I'm experienced</label>
//               <input
//                 type="radio"
//                 id="fresher"
//                 name="workStatus"
//                 value="fresher"
//                 onChange={(e) => setWorkStatus(e.target.value)}
//               />
//               <label htmlFor="fresher">I'm a fresher</label>
//             </div>
//           </label>
//           <label>
//             <input type="checkbox" />
//             Send me important updates via SMS, email, and WhatsApp
//           </label>
//           <button type="button" onClick={handleRegister}>
//             Register now
//           </button>
//         </form>
//         <div className="social-login">
//           <p>Or</p>
//           <button className="google-login">Continue with Google</button>
//           <div className="login-link">
//             <p>
//               Already have an account? <Link to="/login">Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './RegisterPage.css';

// const RegisterPage = ({ setIsAuthenticated }) => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [workStatus, setWorkStatus] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     if (!fullName || !email || !password || !mobile || !workStatus) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/register', {
//         fullName,
//         email,
//         password,
//         mobile,
//         workStatus
//       });

//       console.log('Registration response:', response.data);
//       localStorage.setItem('isAuthenticated', 'true');
//       setIsAuthenticated(true);
//       navigate('/');
//     } catch (error) {
//       console.error('Registration error:', error);

//       if (error.response) {
//         // Server responded with a status other than 2xx
//         console.log('Error response data:', error.response.data);
//         console.log('Error response status:', error.response.status);
//         alert(`Registration failed: ${error.response.data.message || error.response.statusText}`);
//       } else if (error.request) {
//         // Request was made but no response received
//         console.log('Error request:', error.request);
//         alert('No response from server. Please try again later.');
//       } else {
//         // Something happened while setting up the request
//         console.log('Error message:', error.message);
//         alert('Error setting up registration request.');
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="left-panel">
//         <div className="info">
//           <img src="./pic.jpeg" alt="BGD" style={{ height: '200px', width: '300px', borderRadius: '5px' }} />
//           <h2>BGD for you</h2>
//           <ul>
//             <li>Build your profile and let recruiters find you</li>
//             <li>Get job postings delivered right to your email</li>
//             <li>Find a job and grow your career</li>
//           </ul>
//         </div>
//       </div>
//       <div className="right-panel">
//         <h1>Create your profile</h1>
//         <form>
//           <label>
//             Full name*
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="What is your name?"
//               required
//             />
//           </label>
//           <label>
//             Email ID*
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your Email ID"
//               required
//             />
//           </label>
//           <label>
//             Password*
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Minimum 6 characters"
//               required
//             />
//           </label>
//           <label>
//             Mobile number*
//             <input
//               type="tel"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="+91 Enter your mobile number"
//               required
//             />
//           </label>
//           <label>
//             Work status*
//             <div className="work-status-options">
//               <input
//                 type="radio"
//                 id="experienced"
//                 name="workStatus"
//                 value="experienced"
//                 checked={workStatus === 'experienced'}
//                 onChange={(e) => setWorkStatus(e.target.value)}
//               />
//               <label htmlFor="experienced">I'm experienced</label>
//               <input
//                 type="radio"
//                 id="fresher"
//                 name="workStatus"
//                 value="fresher"
//                 checked={workStatus === 'fresher'}
//                 onChange={(e) => setWorkStatus(e.target.value)}
//               />
//               <label htmlFor="fresher">I'm a fresher</label>
//             </div>
//           </label>
//           <label>
//             <input type="checkbox" />
//             Send me important updates via SMS, email, and WhatsApp
//           </label>
//           <button type="button" onClick={handleRegister}>
//             Register now
//           </button>
//         </form>
//         <div className="social-login">
//           <p>Or</p>
//           <button className="google-login">Continue with Google</button>
//           <div className="login-link">
//             <p>
//               Already have an account? <Link to="/login">Login</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = ({ setIsAuthenticated }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [workStatus, setWorkStatus] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!fullName || !email || !password || !mobile || !workStatus) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/users', {
        fullName,
        email,
        password,
        mobile,
        workStatus
      });

      console.log('Registration response:', response.data);
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);

      if (error.response) {
        // Server responded with a status other than 2xx
        console.log('Error response data:', error.response.data);
        console.log('Error response status:', error.response.status);
        alert(`Registration failed: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // Request was made but no response received
        console.log('Error request:', error.request);
        alert('No response from server. Please try again later.');
      } else {
        // Something happened while setting up the request
        console.log('Error message:', error.message);
        alert('Error setting up registration request.');
      }
    }
  };

  return (
    <div className="register-container">
      <div className="left-panel">
        <div className="info">
          <img src="./pic.jpeg" alt="BGD" style={{ height: '200px', width: '300px', borderRadius: '5px' }} />
          <h2>BGD for you</h2>
          <ul>
            <li>Build your profile and let recruiters find you</li>
            <li>Get job postings delivered right to your email</li>
            <li>Find a job and grow your career</li>
          </ul>
        </div>
      </div>
      <div className="right-panel">
        <h1>Create your profile</h1>
        <form>
          <label>
            Full name*
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="What is your name?"
              required
            />
          </label>
          <label>
            Email ID*
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email ID"
              required
            />
          </label>
          <label>
            Password*
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Minimum 6 characters"
              required
            />
          </label>
          <label>
            Mobile number*
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91 Enter your mobile number"
              required
            />
          </label>
          <label>
            Work status*
            <div className="work-status-options">
              <input
                type="radio"
                id="experienced"
                name="workStatus"
                value="experienced"
                checked={workStatus === 'experienced'}
                onChange={(e) => setWorkStatus(e.target.value)}
              />
              <label htmlFor="experienced">I'm experienced</label>
              <input
                type="radio"
                id="fresher"
                name="workStatus"
                value="fresher"
                checked={workStatus === 'fresher'}
                onChange={(e) => setWorkStatus(e.target.value)}
              />
              <label htmlFor="fresher">I'm a fresher</label>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            Send me important updates via SMS, email, and WhatsApp
          </label>
          <button type="button" onClick={handleRegister}>
            Register now
          </button>
        </form>
        <div className="social-login">
          <p>Or</p>
          <button className="google-login">Continue with Google</button>
          <div className="login-link">
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
