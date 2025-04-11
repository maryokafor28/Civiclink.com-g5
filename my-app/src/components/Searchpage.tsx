import React, { useState } from 'react';
import '../styles/SearchPage.css';
import profileImage from '../assets/images/Ellipse 3.png';

const App: React.FC = () => {
  const [search, setSearch] = useState('');

  const commissioners = [
    {
      name: 'Hon Peter Elisha',
      title: 'Environmental commissioner',
      location: 'Agungi, District 5',
    },
    {
      name: 'Hon Peter Elisha',
      title: 'Environmental commissioner',
      location: 'Agungi, District 5',
    },
    {
      name: 'Hon Peter Elisha',
      title: 'Environmental commissioner',
      location: 'Agungi, District 5',
    },
    {
      name: 'Hon Peter Elisha',
      title: 'Environmental commissioner',
      location: 'Agungi, District 5',
    },
  ];

  const filtered = commissioners.filter((c) =>
    `${c.name} ${c.title} ${c.location}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <input
        type="text"
        placeholder="Environmental Agungi"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <div className="card-list">
        {filtered.map((comm, index) => (
          <div key={index} className="card">
            <img src={profileImage} alt="Commissioner" className="card-image" />
            <div>
              <div className="card-name">{comm.name}</div>
              <div className="card-title">{comm.title}</div>
              <div className="card-location">{comm.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
