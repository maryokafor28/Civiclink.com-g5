import './Topbar.css';
import { FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();

  const handleFilterClick = () => {
    navigate('/filterpanel');
  };

  const handleBrowseClick = () => {
    navigate('/search'); 
  };

  return (
    <div className="topbar">
      <div className="topbar-header">
        <h2>Welcome to Civiclink</h2>
        <p>Connect with your local officials to report issues and get answers</p>
      </div>

      <div className="topbar-actions">
        <input type="text" placeholder="Search by keywords" className="search-input" />
        <button className="filter-btn" onClick={handleFilterClick}>
          <FaFilter />
          Filter
        </button>
      </div>

      <div className="browse-btn-wrapper">
        <button className="browse-btn" onClick={handleBrowseClick}>
          Browse All Officials
        </button>
      </div>
    </div>
  );
};

export default Topbar;
