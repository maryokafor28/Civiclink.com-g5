import React from "react";
import "../styles/OfficalCard.css";

type OfficialCardProps = {
  name: string;
  role: string;
  image: string;
  tags: string[];
};

const OfficialCard: React.FC<OfficialCardProps> = ({ name, role, image, tags }) => {
  return (
    <div className="official-card">
      <img src={image} alt={name} className="official-image" />

      <div className="official-info">
        <h3>{name}</h3>
        <p>{role}</p>

        <div className="tag-list">
          {tags.map((tag, index) => (
            <span className="tag" key={index}>
              #{tag}
            </span>
          ))}
        </div>

        <button className="message-button">Message</button>
      </div>
    </div>
  );
};

export default OfficialCard;
