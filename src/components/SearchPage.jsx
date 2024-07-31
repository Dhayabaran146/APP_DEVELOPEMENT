// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaBuilding, FaGraduationCap, FaLaptopCode, FaBriefcase, FaChartLine, FaMoneyBillAlt, FaSearch, FaMapMarkerAlt, FaUserTie, FaRocket, FaBoxes, FaClipboardList } from 'react-icons/fa';
// import JobDiscovery from './JobDiscovery'; 
// import './SearchPage.css';

// const categories = [
//   { icon: <FaMapMarkerAlt />, name: 'Remote' },
//   { icon: <FaBuilding />, name: 'MNC' },
//   { icon: <FaGraduationCap />, name: 'Fresher' },
//   { icon: <FaLaptopCode />, name: 'Software & IT' },
//   { icon: <FaMoneyBillAlt />, name: 'Banking & Finance' },
//   { icon: <FaChartLine />, name: 'Data Science' },
//   { icon: <FaBriefcase />, name: 'Marketing' },
//   { icon: <FaUserTie />, name: 'HR' },
//   { icon: <FaRocket />, name: 'Startup' },
//   { icon: <FaBoxes />, name: 'Supply Chain' },
//   { icon: <FaClipboardList />, name: 'Internship' },
//   { icon: <FaClipboardList />, name: 'Healthcare' },
// ];

// const skillsOptions =   ['Software Engineer', 'Product Manager', 'Data Scientist', 'Graphic Designer',
// 'Mechanical Engineer', 'Civil Engineer', 'Marketing Specialist', 'Sales Manager',
// 'Financial Analyst', 'HR Manager', 'Content Writer', 'Customer Support',
// 'Project Manager', 'Business Analyst', 'UX/UI Designer', 'Accountant',
// 'Administrative Assistant', 'Architect', 'Art Director', 'Attorney',
// 'Auditor', 'Biochemist', 'Business Development Manager', 'Chef',
// 'Chief Executive Officer', 'Chief Financial Officer', 'Chief Operating Officer',
// 'Chief Technology Officer', 'Clinical Psychologist', 'Copywriter',
// 'Customer Service Representative', 'Data Analyst', 'Database Administrator',
// 'Dentist', 'Economist', 'Editor', 'Electrical Engineer', 'Environmental Engineer',
// 'Event Planner', 'Executive Assistant', 'Fashion Designer', 'Fitness Trainer',
// 'Flight Attendant', 'Food Scientist', 'General Manager', 'Geologist',
// 'Graphic Artist', 'Health Educator', 'Healthcare Administrator',
// 'Hotel Manager', 'Human Resources Specialist', 'Industrial Designer',
// 'Insurance Agent', 'Interior Designer', 'Investment Banker', 'IT Manager',
// 'Journalist', 'Laboratory Technician', 'Lawyer', 'Librarian',
// 'Logistics Manager', 'Machine Learning Engineer', 'Maintenance Worker',
// 'Management Consultant', 'Manufacturing Engineer', 'Marketing Manager',
// 'Mechanical Designer', 'Medical Assistant', 'Medical Doctor',
// 'Network Administrator', 'Nurse', 'Nutritionist', 'Occupational Therapist',
// 'Office Manager', 'Operations Manager', 'Paralegal', 'Pharmacist',
// 'Photographer', 'Physician Assistant', 'Pilot', 'Police Officer',
// 'Principal', 'Product Designer', 'Professor', 'Public Relations Specialist',
// 'Real Estate Agent', 'Recruiter', 'Registered Nurse', 'Research Scientist',
// 'Retail Manager', 'Sales Associate', 'School Counselor', 'SEO Specialist',
// 'Social Media Manager', 'Software Developer', 'Speech Therapist',
// 'Statistician', 'Supply Chain Analyst', 'Surgeon', 'Teacher',
// 'Technical Writer', 'Therapist', 'Training Manager', 'Translator',
// 'Travel Agent', 'Veterinarian', 'Video Editor', 'Web Developer',
// 'Writer','Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook',
//   'IBM', 'Intel', 'Cisco', 'Oracle', 'Salesforce',
//   'Adobe', 'Spotify', 'Netflix', 'Twitter', 'Snapchat',
//   'Uber', 'Airbnb', 'LinkedIn', 'Zoom', 'Slack',
//   'Tesla', 'SpaceX', 'Samsung', 'Sony', 'Huawei',
//   'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer',
//   'General Electric', 'Johnson & Johnson', 'Pfizer', 'Novartis', 'Roche',
//   'Bayer', 'Merck', 'Eli Lilly', 'Abbott', 'GlaxoSmithKline',
//   'Procter & Gamble', 'Unilever', 'Nestlé', 'Coca-Cola', 'PepsiCo',
//   'Danone', 'Mars', 'Mondelez International', 'Heineken', 'AB InBev',
//   'ExxonMobil', 'Chevron', 'Shell', 'BP', 'Total',
//   'Siemens', 'Bosch', 'Volkswagen', 'Toyota', 'Ford',
//   'General Motors', 'Honda', 'Hyundai', 'Nissan', 'BMW',
//   'Mercedes-Benz', 'Audi', 'Jaguar', 'Land Rover', 'Porsche',
//   'Adobe', 'Autodesk', 'VMware', 'SAP', 'ServiceNow',
//   'Atlassian', 'Box', 'Dropbox', 'Slack', 'Trello',
//   'Salesforce', 'HubSpot', 'Marketo', 'Zoho', 'Freshworks',
//   'PayPal', 'Square', 'Stripe', 'Adyen', 'Braintree',
//   'Mastercard', 'Visa', 'American Express', 'Discover', 'JPMorgan Chase',
//   'Goldman Sachs', 'Morgan Stanley', 'Bank of America', 'Citi', 'Wells Fargo',
//   'Deutsche Bank', 'Barclays', 'HSBC', 'UBS', 'Credit Suisse',
//   'Lloyds Banking Group', 'Royal Bank of Scotland', 'Standard Chartered', 'ING', 'Santander',
//   'Shell', 'ExxonMobil', 'Chevron', 'BP', 'TotalEnergies',
//   'General Electric', 'Honeywell', '3M', 'Siemens', 'Schneider Electric',
//   'Boeing', 'Lockheed Martin', 'Northrop Grumman', 'Raytheon', 'SAIC',
//   'Dell Technologies', 'Hewlett Packard Enterprise', 'Lenovo', 'Acer', 'ASUS',
//   'Samsung Electronics', 'LG Electronics', 'Sony', 'Panasonic', 'Toshiba',
//   'Apple', 'Google', 'Microsoft', 'Amazon', 'Facebook',
//   'Alibaba', 'Tencent', 'ByteDance', 'JD.com', 'Xiaomi',
//   'Nvidia', 'Qualcomm', 'Broadcom', 'AMD', 'Intel',
//   'Cisco', 'Oracle', 'SAP', 'IBM', 'ServiceNow',
//   'Adobe', 'Autodesk', 'VMware', 'Splunk', 'Palo Alto Networks',
//   'McKinsey & Company', 'Boston Consulting Group', 'Bain & Company', 'Deloitte', 'PwC',
//   'KPMG', 'Ernst & Young', 'Accenture', 'Capgemini', 'CGI',
//   'Tata Consultancy Services', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
//   'CGI', 'Atos', 'Sopra Steria', 'Fujitsu', 'NEC'];
// const experienceOptions = ['0-1 year', '1-3 years', '3-5 years', '5+ years', '10+ years'];
// const locationOptions = [ 'Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata',
//   'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
//   'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad',
//   'Ludhiana', 'Agra', 'Nashik', 'Ranchi', 'Faridabad', 'Meerut', 'Rajkot',
//   'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad',
//   'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Howrah', 'Gwalior',
//   'Jabalpur', 'Coimbatore', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur',
//   'Kota', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubballi-Dharwad', 'Tiruchirappalli',
//   'Bareilly', 'Moradabad', 'Mysore', 'Tiruppur', 'Gurgaon', 'Aligarh', 'Jalandhar',
//   'Bhubaneswar', 'Salem', 'Mira-Bhayandar', 'Warangal', 'Thiruvananthapuram',
//   'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati',
//   'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Bhavnagar',
//   'Dehradun', 'Durgapur', 'Asansol', 'Nanded', 'Kolhapur', 'Ajmer', 'Gulbarga',
//   'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu',
//   'Sangli-Miraj & Kupwad', 'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli',
//   'Malegaon', 'Gaya', 'Tiruvottiyur', 'Thanjavur', 'Jhansi', 'Sangli',
//   'Nellore', 'Bardhaman', 'Nangloi Jat', 'Avadi', 'Dindigul', 'Bilaspur', 'Korba',
//   'Anantapur', 'Kurnool', 'Kozhikode', 'Thiruvananthapuram', 'Vellore', 'Guntur',
//   'Amravati', 'Vijayawada', 'Rajahmundry', 'Warangal', 'Karimnagar', 'Khammam',
//   'Nizamabad', 'Srikakulam', 'Vizianagaram', 'Tenali', 'Proddatur', 'Nellore',
//   'Kadapa', 'Tirupati', 'Chittoor', 'Anantapur', 'Ongole', 'Kakinada', 'Eluru'];

// const SearchPage = () => {
//   const navigate = useNavigate();
//   const [skills, setSkills] = useState('');
//   const [experience, setExperience] = useState('');
//   const [location, setLocation] = useState('');
//   const [showSkillsOptions, setShowSkillsOptions] = useState(false);
//   const [showExperienceOptions, setShowExperienceOptions] = useState(false);
//   const [showLocationOptions, setShowLocationOptions] = useState(false);

//   const handleCategoryClick = (categoryName) => {
//     navigate('/apply');
//   };
  

//   const handleSearch = () => {
    
//     navigate('/results');
//   };

//   const handleInputFocus = (field) => {
//     if (field === 'skills') {
//       setShowSkillsOptions(true);
//       setShowExperienceOptions(false);
//       setShowLocationOptions(false);
//     } else if (field === 'experience') {
//       setShowSkillsOptions(false);
//       setShowExperienceOptions(true);
//       setShowLocationOptions(false);
//     } else if (field === 'location') {
//       setShowSkillsOptions(false);
//       setShowExperienceOptions(false);
//       setShowLocationOptions(true);
//     }
//   };

//   const handleOptionClick = (field, option) => {
//     if (field === 'skills') {
//       setSkills(option);
//       setShowSkillsOptions(false);
//     } else if (field === 'experience') {
//       setExperience(option);
//       setShowExperienceOptions(false);
//     } else if (field === 'location') {
//       setLocation(option);
//       setShowLocationOptions(false);
//     }
//   };

//   const filterOptions = (options, input) => {
//     return options.filter(option => option.toLowerCase().includes(input.toLowerCase()));
//   };

//   return (
//     <div className="search-page">
//       <h1>Discover your ideal career today</h1>
//       <p>7 lakh+ jobs for you to explore</p>
//       <div className="search-bar">
//         <div className="search-input">
//           <input
//             type="text"
//             placeholder="Enter job/campanies"
//             value={skills}
//             onFocus={() => handleInputFocus('skills')}
//             onChange={(e) => setSkills(e.target.value)}
//           />
//           {showSkillsOptions && skills && (
//             <div className="options">
//               {filterOptions(skillsOptions, skills).map((option, index) => (
//                 <div key={index} onClick={() => handleOptionClick('skills', option)}>
//                   {option}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="search-input">
//           <input
//             type="text"
//             placeholder="Select experience"
//             value={experience}
//             onFocus={() => handleInputFocus('experience')}
//             onChange={(e) => setExperience(e.target.value)}
//           />
//           {showExperienceOptions && experience && (
//             <div className="options">
//               {filterOptions(experienceOptions, experience).map((option, index) => (
//                 <div key={index} onClick={() => handleOptionClick('experience', option)}>
//                   {option}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="search-input">
//           <input
//             type="text"
//             placeholder="Enter location"
//             value={location}
//             onFocus={() => handleInputFocus('location')}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//           {showLocationOptions && location && (
//             <div className="options">
//               {filterOptions(locationOptions, location).map((option, index) => (
//                 <div key={index} onClick={() => handleOptionClick('location', option)}>
//                   {option}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <button><FaSearch /> Search</button>
//       </div>
//       <div className="categories">
//         {categories.map((category, index) => (
//           <div key={index} className="category" onClick={() => handleCategoryClick(category.name)}>
//             {category.icon}
//             <span>{category.name}</span>
//           </div>
//         ))}
//       </div>
//       <JobDiscovery />
//     </div>
//   );
// };

// export default SearchPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding, FaGraduationCap, FaLaptopCode, FaBriefcase, FaChartLine, FaMoneyBillAlt, FaSearch, FaMapMarkerAlt, FaUserTie, FaRocket, FaBoxes, FaClipboardList } from 'react-icons/fa';
import JobDiscovery from './JobDiscovery'; 
import './SearchPage.css';

const categories = [
  { icon: <FaMapMarkerAlt />, name: 'Remote' },
  { icon: <FaBuilding />, name: 'MNC' },
  { icon: <FaGraduationCap />, name: 'Fresher' },
  { icon: <FaLaptopCode />, name: 'Software & IT' },
  { icon: <FaMoneyBillAlt />, name: 'Banking & Finance' },
  { icon: <FaChartLine />, name: 'Data Science' },
  { icon: <FaBriefcase />, name: 'Marketing' },
  { icon: <FaUserTie />, name: 'HR' },
  { icon: <FaRocket />, name: 'Startup' },
  { icon: <FaBoxes />, name: 'Supply Chain' },
  { icon: <FaClipboardList />, name: 'Internship' },
  { icon: <FaClipboardList />, name: 'Healthcare' },
];

const skillsOptions = ['Software Engineer', 'Product Manager', 'Data Scientist', 'Graphic Designer',
'Mechanical Engineer', 'Civil Engineer', 'Marketing Specialist', 'Sales Manager',
'Financial Analyst', 'HR Manager', 'Content Writer', 'Customer Support',
'Project Manager', 'Business Analyst', 'UX/UI Designer', 'Accountant',
'Administrative Assistant', 'Architect', 'Art Director', 'Attorney',
'Auditor', 'Biochemist', 'Business Development Manager', 'Chef',
'Chief Executive Officer', 'Chief Financial Officer', 'Chief Operating Officer',
'Chief Technology Officer', 'Clinical Psychologist', 'Copywriter',
'Customer Service Representative', 'Data Analyst', 'Database Administrator',
'Dentist', 'Economist', 'Editor', 'Electrical Engineer', 'Environmental Engineer',
'Event Planner', 'Executive Assistant', 'Fashion Designer', 'Fitness Trainer',
'Flight Attendant', 'Food Scientist', 'General Manager', 'Geologist',
'Graphic Artist', 'Health Educator', 'Healthcare Administrator',
'Hotel Manager', 'Human Resources Specialist', 'Industrial Designer',
'Insurance Agent', 'Interior Designer', 'Investment Banker', 'IT Manager',
'Journalist', 'Laboratory Technician', 'Lawyer', 'Librarian',
'Logistics Manager', 'Machine Learning Engineer', 'Maintenance Worker',
'Management Consultant', 'Manufacturing Engineer', 'Marketing Manager',
'Mechanical Designer', 'Medical Assistant', 'Medical Doctor',
'Network Administrator', 'Nurse', 'Nutritionist', 'Occupational Therapist',
'Office Manager', 'Operations Manager', 'Paralegal', 'Pharmacist',
'Photographer', 'Physician Assistant', 'Pilot', 'Police Officer',
'Principal', 'Product Designer', 'Professor', 'Public Relations Specialist',
'Real Estate Agent', 'Recruiter', 'Registered Nurse', 'Research Scientist',
'Retail Manager', 'Sales Associate', 'School Counselor', 'SEO Specialist',
'Social Media Manager', 'Software Developer', 'Speech Therapist',
'Statistician', 'Supply Chain Analyst', 'Surgeon', 'Teacher',
'Technical Writer', 'Therapist', 'Training Manager', 'Translator',
'Travel Agent', 'Veterinarian', 'Video Editor', 'Web Developer',
'Writer','Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook',
  'IBM', 'Intel', 'Cisco', 'Oracle', 'Salesforce',
  'Adobe', 'Spotify', 'Netflix', 'Twitter', 'Snapchat',
  'Uber', 'Airbnb', 'LinkedIn', 'Zoom', 'Slack',
  'Tesla', 'SpaceX', 'Samsung', 'Sony', 'Huawei',
  'Dell', 'HP', 'Lenovo', 'ASUS', 'Acer',
  'General Electric', 'Johnson & Johnson', 'Pfizer', 'Novartis', 'Roche',
  'Bayer', 'Merck', 'Eli Lilly', 'Abbott', 'GlaxoSmithKline',
  'Procter & Gamble', 'Unilever', 'Nestlé', 'Coca-Cola', 'PepsiCo',
  'Danone', 'Mars', 'Mondelez International', 'Heineken', 'AB InBev',
  'ExxonMobil', 'Chevron', 'Shell', 'BP', 'Total',
  'Siemens', 'Bosch', 'Volkswagen', 'Toyota', 'Ford',
  'General Motors', 'Honda', 'Hyundai', 'Nissan', 'BMW',
  'Mercedes-Benz', 'Audi', 'Jaguar', 'Land Rover', 'Porsche',
  'Adobe', 'Autodesk', 'VMware', 'SAP', 'ServiceNow',
  'Atlassian', 'Box', 'Dropbox', 'Slack', 'Trello',
  'Salesforce', 'HubSpot', 'Marketo', 'Zoho', 'Freshworks',
  'PayPal', 'Square', 'Stripe', 'Adyen', 'Braintree',
  'Mastercard', 'Visa', 'American Express', 'Discover', 'JPMorgan Chase',
  'Goldman Sachs', 'Morgan Stanley', 'Bank of America', 'Citi', 'Wells Fargo',
  'Deutsche Bank', 'Barclays', 'HSBC', 'UBS', 'Credit Suisse',
  'Lloyds Banking Group', 'Royal Bank of Scotland', 'Standard Chartered', 'ING', 'Santander',
  'Shell', 'ExxonMobil', 'Chevron', 'BP', 'TotalEnergies',
  'General Electric', 'Honeywell', '3M', 'Siemens', 'Schneider Electric',
  'Boeing', 'Lockheed Martin', 'Northrop Grumman', 'Raytheon', 'SAIC',
  'Dell Technologies', 'Hewlett Packard Enterprise', 'Lenovo', 'Acer', 'ASUS',
  'Samsung Electronics', 'LG Electronics', 'Sony', 'Panasonic', 'Toshiba',
  'Apple', 'Google', 'Microsoft', 'Amazon', 'Facebook',
  'Alibaba', 'Tencent', 'ByteDance', 'JD.com', 'Xiaomi',
  'Nvidia', 'Qualcomm', 'Broadcom', 'AMD', 'Intel',
  'Cisco', 'Oracle', 'SAP', 'IBM', 'ServiceNow',
  'Adobe', 'Autodesk', 'VMware', 'Splunk', 'Palo Alto Networks',
  'McKinsey & Company', 'Boston Consulting Group', 'Bain & Company', 'Deloitte', 'PwC',
  'KPMG', 'Ernst & Young', 'Accenture', 'Capgemini', 'CGI',
  'Tata Consultancy Services', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',];
const experienceOptions = ['0-1 year', '1-3 years', '3-5 years', '5+ years', '10+ years'];
const locationOptions = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata',
  'Surat', 'Pune', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane',
  'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad',
  'Ludhiana', 'Agra', 'Nashik', 'Ranchi', 'Faridabad', 'Meerut', 'Rajkot',
  'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi', 'Srinagar', 'Aurangabad',
  'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad', 'Howrah', 'Gwalior',
  'Jabalpur', 'Coimbatore', 'Vijayawada', 'Jodhpur', 'Madurai', 'Raipur',
  'Kota', 'Chandigarh', 'Guwahati', 'Solapur', 'Hubballi-Dharwad', 'Tiruchirappalli',
  'Bareilly', 'Moradabad', 'Mysore', 'Tiruppur', 'Gurgaon', 'Aligarh', 'Jalandhar',
  'Bhubaneswar', 'Salem', 'Mira-Bhayandar', 'Warangal', 'Thiruvananthapuram',
  'Guntur', 'Bhiwandi', 'Saharanpur', 'Gorakhpur', 'Bikaner', 'Amravati',
  'Noida', 'Jamshedpur', 'Bhilai', 'Cuttack', 'Firozabad', 'Kochi', 'Bhavnagar',
  'Dehradun', 'Durgapur', 'Asansol', 'Nanded', 'Kolhapur', 'Ajmer', 'Gulbarga',
  'Jamnagar', 'Ujjain', 'Loni', 'Siliguri', 'Jhansi', 'Ulhasnagar', 'Jammu',
  'Sangli-Miraj & Kupwad', 'Mangalore', 'Erode', 'Belgaum', 'Ambattur', 'Tirunelveli',
  'Malegaon', 'Gaya', 'Tiruvottiyur', 'Thanjavur', 'Jhansi', 'Sangli',
  'Nellore', 'Bardhaman', 'Nangloi Jat', 'Avadi', 'Dindigul', 'Bilaspur', 'Korba',
  'Anantapur', 'Kurnool', 'Kozhikode', 'Thiruvananthapuram', 'Vellore', 'Guntur',
  'Amravati', 'Vijayawada', 'Rajahmundry', 'Warangal', 'Karimnagar', 'Khammam',
  'Nizamabad', 'Srikakulam', 'Vizianagaram', 'Tenali', 'Proddatur', 'Nellore',
  'Kadapa', 'Tirupati', 'Chittoor', 'Anantapur', 'Ongole', 'Kakinada', 'Eluru'];

const SearchPage = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');
  const [showSkillsOptions, setShowSkillsOptions] = useState(false);
  const [showExperienceOptions, setShowExperienceOptions] = useState(false);
  const [showLocationOptions, setShowLocationOptions] = useState(false);

  const handleCategoryClick = (categoryName) => {
    navigate('/apply');
  };
  
  const handleSearch = () => {
    // Ensure there are no validation issues preventing navigation
    navigate('/results');
  };

  const handleInputFocus = (field) => {
    if (field === 'skills') {
      setShowSkillsOptions(true);
      setShowExperienceOptions(false);
      setShowLocationOptions(false);
    } else if (field === 'experience') {
      setShowSkillsOptions(false);
      setShowExperienceOptions(true);
      setShowLocationOptions(false);
    } else if (field === 'location') {
      setShowSkillsOptions(false);
      setShowExperienceOptions(false);
      setShowLocationOptions(true);
    }
  };

  const handleOptionClick = (field, option) => {
    if (field === 'skills') {
      setSkills(option);
      setShowSkillsOptions(false);
    } else if (field === 'experience') {
      setExperience(option);
      setShowExperienceOptions(false);
    } else if (field === 'location') {
      setLocation(option);
      setShowLocationOptions(false);
    }
  };

  const filterOptions = (options, input) => {
    return options.filter(option => option.toLowerCase().includes(input.toLowerCase()));
  };

  return (
    <div className="search-page">
      <h1>Discover your ideal career today</h1>
      <p>7 lakh+ jobs for you to explore</p>
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter job/companies"
            value={skills}
            onFocus={() => handleInputFocus('skills')}
            onChange={(e) => setSkills(e.target.value)}
          />
          {showSkillsOptions && skills && (
            <div className="options">
              {filterOptions(skillsOptions, skills).map((option, index) => (
                <div key={index} onClick={() => handleOptionClick('skills', option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Select experience"
            value={experience}
            onFocus={() => handleInputFocus('experience')}
            onChange={(e) => setExperience(e.target.value)}
          />
          {showExperienceOptions && experience && (
            <div className="options">
              {filterOptions(experienceOptions, experience).map((option, index) => (
                <div key={index} onClick={() => handleOptionClick('experience', option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onFocus={() => handleInputFocus('location')}
            onChange={(e) => setLocation(e.target.value)}
          />
          {showLocationOptions && location && (
            <div className="options">
              {filterOptions(locationOptions, location).map((option, index) => (
                <div key={index} onClick={() => handleOptionClick('location', option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <button onClick={handleSearch}><FaSearch /> Search</button>
      </div>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category" onClick={() => handleCategoryClick(category.name)}>
            {category.icon}
            <span>{category.name}</span>
          </div>
        ))}
      </div>
      <JobDiscovery />
    </div>
  );
};

export default SearchPage;
