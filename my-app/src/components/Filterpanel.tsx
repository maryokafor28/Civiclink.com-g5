import React, { useState } from 'react';
import '../styles/Filterpanel.css';

type Filters = {
  fromDate: string;
  toDate: string;
  official: {
    federal: boolean;
    state: boolean;
    local: boolean;
  };
  location: string;
  issue: string;
};

const FilterPanel: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    fromDate: '',
    toDate: '',
    official: {
      federal: false,
      state: false,
      local: false,
    },
    location: '',
    issue: '',
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      official: {
        ...prev.official,
        [name]: checked,
      },
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      fromDate: '',
      toDate: '',
      official: { federal: false, state: false, local: false },
      location: '',
      issue: '',
    });
  };

  const applyFilters = () => {
    console.log('Applied Filters:', filters);
  };

  return (
    <div className="filter-panel">
      <div className="header">
        <h3>Filter by</h3>
        <button className="close-btn">x</button>
      </div>

      <div className="section">
  <label>Date</label>
  <div className="date-inputs">
    <div className="date-input">
      <label htmlFor="fromDate">From</label>
      <input
        type="date"
        id="fromDate"
        name="fromDate"
        value={filters.fromDate}
        onChange={handleChange}
      />
    </div>
    <div className="date-input">
      <label htmlFor="toDate">To</label>
      <input
        type="date"
        id="toDate"
        name="toDate"
        value={filters.toDate}
        onChange={handleChange}
      />
    </div>
</div>
</div>
<div className="underline"></div> 


      <div className="section">
        <label>Official</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" name="federal" checked={filters.official.federal} onChange={handleCheckboxChange} />
            Federal
          </label>
          <label>
            <input type="checkbox" name="state" checked={filters.official.state} onChange={handleCheckboxChange} />
            State
          </label>
          <label>
            <input type="checkbox" name="local" checked={filters.official.local} onChange={handleCheckboxChange} />
            Local
          </label>
        </div>
      </div>

      <div className="section">
        <label>Location</label>
        <input type="text" name="location" value={filters.location} onChange={handleChange} placeholder="Enter location" />
      </div>

      <div className="section">
        <label>Issues</label>
        <select name="issue" value={filters.issue} onChange={handleChange} style={{color: filters.issue ? 'black':'#888'}} >
          <option value="">Select issues category</option>
          <option value="health">Health</option>
          <option value="education">Education</option>
          <option value="infrastructure">Infrastructure</option>
        </select>
      </div>

      <div className="actions">
        <button className="clear" onClick={clearFilters}>Clear</button>
        <button className="apply" onClick={applyFilters}>Apply</button>
      </div>
    </div>
  );
};

export default FilterPanel;
