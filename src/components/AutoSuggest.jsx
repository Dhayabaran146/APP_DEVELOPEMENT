import React, { useState } from 'react';
import './AutoSuggest.css';

const AutoSuggest = ({ suggestions, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);

    const filtered = suggestions.filter(
      suggestion => suggestion.toLowerCase().includes(userInput.toLowerCase())
    );

    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 200);
  };

  return (
    <div className="autosuggest">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {showSuggestions && inputValue && (
        <ul className="suggestions">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleClick(suggestion)}>
                {suggestion}
              </li>
            ))
          ) : (
            <li>No suggestions available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggest;
