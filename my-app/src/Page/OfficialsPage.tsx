
import React from "react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import OfficialCard from "./OfficialCard";
import "../styles/OfficialsPage.css";
import icon from "../assets/icon.png";
// Image imports
import MinisterTaiwoImg from "../assets/A-Taiwo.png";
import OrieukwuStanley from "../assets/b-orieukwu.png";
import EjirogheneAdesua  from "../assets/c-adesuwa.png";
import RobertFox from "../assets/d-robert.png";
import MarvinMcKinney from "../assets/e-marvin.png";
import JennyWilson from "../assets/f-jenny.png";
import KristinWatson from "../assets/g-kathryn.png";
import JacobJones from "../assets/i-jacob.png";
import FloydMiles from "../assets/j-flyod.png";

// Federal Officials
const federalOfficials = [
  {
    name: "Minister A. Taiwo",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: MinisterTaiwoImg,
  },
  {
    name: "Orieukwu Stanley ",
    role: "City Council",
    tags: ["Transport", "Parks"],
    image: OrieukwuStanley,
  },
  {
    name: "Ejiroghene Adesua ",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: EjirogheneAdesua ,
  },
  {
    name: "Robert Fox",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: RobertFox,
  },
  {
    name: "Marvin McKinney",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: MarvinMcKinney
  },
];

// State Officials
const stateOfficials = [
  {
    name: "Jenny Wilson",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: JennyWilson,
  },
  {
    name: "Kathryn Murphy",
    role: "City Council",
    tags: ["Transport", "Parks"],
    image: MinisterTaiwoImg,
  },
  {
    name: "Kristin Watson",
    role: "Women Affairs",
    tags: ["Health", "Education"],
    image: KristinWatson,
  },
  {
    name: "Jacob Jones",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: JacobJones,
  },
  {
    name: "Floyd Miles",
    role: "women Affairs",
    tags: ["Health", "Education"],
    image: FloydMiles
  },
];

const tabOptions = ["All Officials", "Federal", "State", "Local"];
const OfficialsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = () => {
    alert("Filter clicked!");
  };
  return (
    <div className="officials-page">
      <h1>Official Directory</h1>
      <p>Browse and connect with verified government officials</p>

      <div className="tabs-container">
        {tabOptions.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="search-filter-container">
      <input 
          type="text"
          placeholder="🔍Search by name, role, or topics..."
          value={searchTerm}
          onChange={handleSearchChange}
          />
        <button className="filter-button" onClick={handleFilterClick}>
         <FaFilter/>Filter
        </button>
      </div>

      <div className="tab-content">
        
        {searchTerm && (
          <p>
            Searching for: <em>{searchTerm}</em>
          </p>
        )}
      </div>
      <section className="officials-section">
        <h2>Federal Officials</h2>
        <div className="officials-list">
          {federalOfficials.map((official, index) => (
            <OfficialCard key={index} {...official} />
          ))}
        </div>
      </section>

      <section className="officials-section">
        <h2>State Officials</h2>
        <div className="officials-list">
          {stateOfficials.map((official, index) => (
            <OfficialCard key={index} {...official} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OfficialsPage;
