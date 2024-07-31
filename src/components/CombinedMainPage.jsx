
import React, { useState, useEffect } from 'react';
import './MainPage.css';

const CombinedMainPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [rating, setRating] = useState(0);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const popularCompanies = [
    { name: 'Tata Consultancy Services', reviews: '22,989 reviews', url: '#', logo: 'TCS.NS.png' },
    { name: 'Zoho', reviews: '6009 reviews', url: '#', logo: 'zoho.jpeg' },
    { name: 'EY', reviews: '10,033 reviews', url: '#', logo: 'ey.jpeg' },
    { name: 'Microsoft', reviews: '8,529 reviews', url: '#', logo: 'microsoft.jpeg' },
    { name: 'Amazon', reviews: '1,019 reviews', url: '#', logo: 'amazon.jpeg' },
    { name: 'LTIMindtree', reviews: '2,878 reviews', url: '#', logo: 'lt.jpeg' },
    { name: 'Capgemini', reviews: '12,345 reviews', url: '#', logo: 'cape.jpeg' },
    { name: 'Google', reviews: '7,890 reviews', url: '#', logo: 'google.jpeg' },
    { name: 'Adani Group', reviews: '4,567 reviews', url: '#', logo: 'adani.jpeg' },
    { name: 'JP Morgan', reviews: '4,807 reviews', url: '#', logo: 'JP.jpeg' },
    { name: 'Accenture', reviews: '5,999 reviews', url: '#', logo: 'accen.jpeg' },
    { name: 'HCL', reviews: '5,999 reviews', url: '#', logo: 'HCL.jpeg' },
    { name: 'Caterpillar', reviews: '6,010 reviews', url: '#', logo: 'cat.jpeg' },
    { name: 'Infosys', reviews: '6,432 reviews', url: '#', logo: 'Info.jpeg' },
    { name: 'Wipro', reviews: '6,432 reviews', url: '#', logo: 'wipro.jpeg' },
  ];

  useEffect(() => {
    const filtered = popularCompanies.filter(company =>
      company.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompanies(filtered);
  }, [searchTerm]);

  const handleSearch = () => {
    alert(`Searching for ${searchTerm}`);
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="main-container">
      <div className="hero-section">
        <h1>Explore your Dream workplace</h1>
        <p>Get access to millions of company reviews</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Company name or job title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Find Companies</button>
        </div>
        <a href="#">Do you want to search for salaries?</a>
      </div>
      <div className="popular-companies">
        <h2>Popular companies</h2>
        <div className="companies-list">
          {filteredCompanies.map((company, index) => (
            <a key={index} href={company.url} className="company-link">
              <div className="company-card">
                <img src={company.logo} alt={`${company.name} logo`} />
                <h3>{company.name}</h3>
                <p>{company.reviews}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="rating-section">
        <img src="rating.jpeg" alt="Rate employer" className="rating-image" />
        <span>Rate your recent employer:</span>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`star ${index < rating ? 'filled' : ''}`}
              onClick={() => handleRating(index + 1)}
            >★</i>
          ))}
        </div>
        {rating > 0 && <p>You rated: {rating} star{rating > 1 ? 's' : ''}</p>}
      </div>
    </div>
  );
};

export default CombinedMainPage;

