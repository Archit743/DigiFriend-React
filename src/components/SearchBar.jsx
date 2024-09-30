import React, { useState } from 'react';
import '../Styles/SearchBar.css';
import { FaSearch } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';


const availableKeywords = [
  'whatsapp',
  'gpay',
  'facebook',
  'ticket booking',
  'calling',
  'android',
  'ios',
  'a',
  'ab',
  'abc'
];

function SearchBar() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length) {
      const filtered = availableKeywords.filter(keyword =>
        keyword.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const selectInput = (value) => {
    setInput(value);
    setResults([]);
  };

  return (
    <div className="main-bar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Domains"
          id="input-box"
          autocomplete="off"
          value={input}
          onChange={handleChange}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="result-box">
        {results.length > 0 && (
          <ul>
            {results.map((list, index) => (
              <li key={index} onClick={() => selectInput(list)}>
                {list}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
