// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './LoginForm.css';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (!email || !password) {
//       alert('Please fill in both fields.');
//       return;
//     }

//     // Simulate login success
//     console.log('Logging in with', { email, password });

//     // Redirect to HomePage with success message state
//     navigate('/', { state: { loginSuccess: true } });
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h1>Login</h1>
//         <label>
//           Email ID / Username
//           <input 
//             type="text" 
//             value={email} 
//             onChange={handleEmailChange} 
//             placeholder="Enter Email ID / Username" 
//           />
//         </label>
//         <label>
//           Password
//           <div className="password-container">
//             <input 
//               type={showPassword ? "text" : "password"} 
//               value={password} 
//               onChange={handlePasswordChange} 
//               placeholder="Enter Password" 
//               required
//             />
//             <button 
//               type="button" 
//               className="show-password" 
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//         </label>
//         <a href="#" className="forgot-password">Forgot Password?</a>
//         <button onClick={handleLogin} className="login-button">Login</button>
       
//         <div className="divider">
//           <span>Or</span>
//         </div>
//         <button className="google-login">Sign in with Google</button>
//         <div className="register-link">
//           <p>Don't have an account? <Link to="/register">Register here</Link></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginPage = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in both fields.');
      return;
    }

    // Simulate login success
    console.log('Logging in with', { email, password });
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <label>
          Email ID / Username
          <input 
            type="text" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter Email ID / Username" 
          />
        </label>
        <label>
          Password
          <div className="password-container">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter Password" 
              required
            />
          </div>
        </label>
        <button onClick={handleLogin} className="login-button">Login</button>
        <div className="divider"><span>Or</span></div>
        <button className="google-login">Sign in with Google</button>
        <div className="register-link">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
