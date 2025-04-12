import React from 'react';
import '../Commonissue/Commonissues.css';
import { FiMapPin, FiArrowRight } from 'react-icons/fi';

interface IssueCardProps {
  title: string;
  categories: string[];
}

const issues: IssueCardProps[] = [
  { title: 'Report a Pothole', categories: ['Road Environment'] },
  { title: 'Garbage collection Issue', categories: ['Sanitation Environment'] },
  { title: 'Street Light Outage', categories: ['Infrastructure Environment'] },
];

const IssueCards: React.FC = () => {
  return (
    <div className="issue-cards-container">
      {issues.map((issue, index) => (
        <div className="issue-card" key={index}>
          <div className="icon-wrapper">
            <FiMapPin className="location-icon" />
          </div>
          <h3 className="issue-title">{issue.title}</h3>
          <div className="issue-categories">
            {issue.categories.map((cat, i) => (
              <span key={i}>{cat}</span>
            ))}
          </div>
          <button className="find-button">
            Find Official <FiArrowRight />
          </button>
        </div>
      ))}
    </div>
  );
};

const CommonIssues = () => {
  return (
    <div className="h2">
      <h2>Common Issues</h2>
      <IssueCards />
    </div>
  );
};

export default CommonIssues;
