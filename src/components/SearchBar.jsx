import React from 'react';
import './SearchBar.css';
import { FiSearch } from 'react-icons/fi'; // 아이콘 라이브러리

const SearchBar = ({ placeholder = 'Illit 검색 후 클릭', onChange }) => {
  return (
    <div className="search-bar">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="search-input"
      />
      <span className="red-dot"></span>
    </div>
  );
};

export default SearchBar;