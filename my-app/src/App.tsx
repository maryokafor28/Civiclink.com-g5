import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FilterPanel from './components/Filterpanel';
import CommissionerList from './components/Searchpage'

function App() {
  return (
    <Router>
      <Routes>
        {/* { <Route path="/" element={<FilterPanel />} /> } */}
        <Route path="/" element={<CommissionerList />} />
      </Routes>
    </Router>
  );
}

export default App;