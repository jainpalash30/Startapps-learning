import { useState } from 'react';
import '../styles/SearchBox.css';

function SearchBox({ onSearch }) {

  const [inputValue, setInputValue] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // page ko reload nhi hone deta
    
    
    if (inputValue.trim() !== '') {
      onSearch(inputValue); //  city name -> parent component
      setInputValue(''); 
    }
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBox;