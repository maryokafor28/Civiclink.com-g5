import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Commonissues from './components/Commonissue/Commonissues';
import OfficialsList from './components/OfficialsList/OfficialsList';
import FilterPanel from './components/Filterpanel';
import CommissionerList from './components/Searchpage';
import SearchOfficials from './components/Searcofficials';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/messagechat/Chatwindow';
import OfficialsPage  from './Page/OfficialsPage';
import DashboardLayout from './Layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <DashboardLayout />}>
             <Route index element={
                <>
                 <Commonissues />
                <OfficialsList />
                </>
                } />
       
        <Route path="/Filterpanel" element={<FilterPanel />} />
        <Route path="/OfficialsPage" element={<OfficialsPage/>} />
        <Route path="/commissioner" element={<CommissionerList />} />
        <Route path="/search" element={<div>
          <SearchOfficials />
          <Dashboard/>
        </div>} />
        </Route>
      
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
