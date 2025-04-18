
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Dashboard from '../components/Dashboard/Dashboard';
import Topbar from '../components/Topbar/Topbar';
import { FaBell, FaAngleDown } from 'react-icons/fa';
import profile from '../assets/images/user-profile.png';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const hideTopbar = location.pathname === '/OfficialsPage' || location.pathname === '/Filterpanel' || location.pathname === '/commissioner';
  return (
    <div style={{ display: 'flex' }}>
      <Dashboard />
      <div style={{ flex: 1 }}>
        <div className='topBar-container'>
        {!hideTopbar && 
          <h1>Dashboard</h1>}
          <div className='topBar-icons'>
            <span><FaBell /></span>
            <div className="profile"><img src={profile} alt="Profile" /></div>
            <FaAngleDown />
          </div>
        </div>
        
        {/* The Topbar is conditionally rendered based on the current route */}
        {/* If the current route is not one of the specified ones, the Topbar will be displayed */}
        {!hideTopbar && <Topbar />}
        <div style={{ padding: '20px' }}>
          <Outlet /> {/* This renders each individual page inside the layout */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
