import React from "react";
import OfficialCard from "./OfficialCard";
import "../styles/OfficialsPage.css";

const federalOfficials = [
  {
    name: "Minister A. Taiwo",
    role: "Women Affairs",
    image: "https://via.placeholder.com/60",
    tags: ["Health", "Education"],
  },
  {
    name: "Mr. Bolaji Ahmed",
    role: "Minister of Finance",
    image: "https://via.placeholder.com/60",
    tags: ["Economy", "Revenue"],
  },
];

const stateOfficials = [
  {
    name: "Ms. Chinyere Obi",
    role: "Commissioner for Education",
    image: "https://via.placeholder.com/60",
    tags: ["Schools", "Youth"],
  },
  {
    name: "Mr. Danjuma Bello",
    role: "State Health Coordinator",
    image: "https://via.placeholder.com/60",
    tags: ["Vaccination", "Health"],
  },
];

const OfficialsPage: React.FC = () => {
  return (
    <div className="officials-page">
      <div className="header">
        <h1>Official Directory</h1>
        <p>Browse and connect with verified government officials</p>
      </div>

      <div className="tabs">
        <button className="tab active">All Officials</button>
        <button className="tab">Federal</button>
        <button className="tab">State</button>
        <button className="tab">Local</button>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name, role, or topics..."
          className="search-input"
        />
        <button className="filter-button">Filter</button>
      </div>

      <div className="section">
        <h2>Federal Officials</h2>
        <div className="card-container">
          {federalOfficials.map((official, index) => (
            <OfficialCard
              key={index}
              name={official.name}
              role={official.role}
              image={official.image}
              tags={official.tags}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>State Officials</h2>
        <div className="card-container">
          {stateOfficials.map((official, index) => (
            <OfficialCard
              key={index}
              name={official.name}
              role={official.role}
              image={official.image}
              tags={official.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfficialsPage;
