import React from 'react';
import '../styles/Searchbar.css'; // Import the CSS file

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      {/* Additional search bar elements if needed */}
    </div>
  );
};

export default SearchBar;
