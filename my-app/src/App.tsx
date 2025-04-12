import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import Dashboard from './components/Dashboard/Dashboard';
import Topbar from './components/Topbar/Topbar';
import Commonissues from './components/Commonissue/Commonissues';
import OfficialsList from './components/OfficialsList/OfficialsList';
import FilterPanel from './components/Filterpanel';
import CommissionerList from './components/Searchpage';
import SearchOfficials from './components/Searcofficials';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/messagechat/Chatwindow';
import profile from './assets/images/user-profile.png'
import OfficialsPage  from './Page/OfficialsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ display: 'flex' }}>
            <Dashboard />
            <div style={{ flex: 1 }}>
              <div className='topBar-container'>
                <h1>Dashboard</h1>
                <div className='topBar-icons'>
                  <span> < FaBell /> </span>
                  <div className="profile"> <img src={profile} alt="" /></div>
                  <FaAngleDown />
                </div>
              </div>
              <Topbar />
              <div style={{ padding: '20px' }}>
                <Commonissues />
                <OfficialsList />
              </div>
            </div>
          </div>
        } />
        <Route path="/Filterpanel" element={<FilterPanel />} />
        <Route path="/OfficialsPage" element={<OfficialsPage/>} />
        <Route path="/commissioner" element={<CommissionerList />} />
        <Route path="/search" element={<div>
          <SearchOfficials />
          <Dashboard/>
        </div>} />
        <Route path="/chat" element={
          <div className="app-container">
            <Sidebar />
            <ChatWindow />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
