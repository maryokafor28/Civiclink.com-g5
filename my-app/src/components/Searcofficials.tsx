// import React from 'react';
import '../styles/Searchofficials.css';
import icon from '../assets/images/simple-line-icons_people.png';


const SearchOfficials = () => {
  return (
    <div className="search-officials-container">
      <h2 className="search-title">Search Officials</h2>
      <div className="search-content">
        <div className="icon-placeholder">
          <img
            src={icon}
            alt="User icon"
          />
          <p>No Activity yet</p>
        </div>
       <div><button className="search-button">Search</button>
      </div>
      </div>
    </div>
  );
};

export default SearchOfficials;