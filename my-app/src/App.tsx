import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterPanel from './components/Filterpanel';
import CommissionerList from './components/Searchpage'
import SearchOfficials from './components/Searcofficials';

function App() {
  return (
    <Router>
      <Routes>
         { <Route path="/" element={<FilterPanel />} /> } 
        <Route path="/commissioner" element={<CommissionerList />} />
        <Route path="search" element={<SearchOfficials />} />
      </Routes>
    </Router>
  );
}

export default App;