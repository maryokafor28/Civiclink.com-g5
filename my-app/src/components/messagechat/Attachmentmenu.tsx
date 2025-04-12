import React from 'react';
// import './styles/AttachmentMenu.css';

const AttachmentMenu: React.FC = () => {
  return (
    <div className="attachment-menu">
      <div className="attachment-item">Camera</div>
      <div className="attachment-item">Photo Library</div>
      <div className="attachment-item">Document</div>
    </div>
  );
};

export default AttachmentMenu;