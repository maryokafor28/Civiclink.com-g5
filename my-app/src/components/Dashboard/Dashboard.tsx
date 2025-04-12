
import React from 'react';
import './Dashboard.css';
import { FaHome, FaEnvelope, FaUserFriends, FaCog, FaLifeRing } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import logo from './logo.png'
const Dashboard: React.FC  = () => {
  return (
    <div className="sidebar">
      <div className="logo"><img src={logo} alt="Civiclink Logo"/></div>
      <nav className="nav-links">
        <a className="active" href="../pages/Dashboard.tsx">
          <FaHome className="icon" />
          Dashboard
        </a>
        <a href="#">
          <FaEnvelope className="icon" />
          Messages
        </a>
        <a href="#">
          
          <FaUserFriends className="icon" />
          Officials
        </a>
      </nav>
      <div className="bottom-links">
        <a href="#">
          <FaLifeRing className="icon" />
          Support
        </a>
        <a href="#">
          <FaCog className="icon" />
          Settings
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
