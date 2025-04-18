// src/components/OfficialCard.tsx
import React from "react";
import "../styles/OfficialCards.css";
import { FaCheckCircle } from "react-icons/fa";

interface OfficialCardProps {
    name: string;
    role: string;
    tags: string[];
    image?: string; 
  }
  

  const OfficialCard: React.FC<OfficialCardProps> = ({
    name,
    role, 
    tags,
    image,
  }) => {
    return (
      <div className="official-card">
        <div className="avatar-top">
          <img src={image || "/src/assets/default.png"} alt={name} />
  
        </div>
        <div className="official-info">
          <h3>
            {name} <span className="verified"><FaCheckCircle /></span>
          </h3>
          <p>{role}</p>
  
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag-button">#{tag}</span>
            ))}
          </div>
  
          <button className="message-button">Message</button>
        </div>
      </div>
    );
  };
  

export default OfficialCard;
