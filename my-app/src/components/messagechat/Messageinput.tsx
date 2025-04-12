import React, { useState } from 'react';
import Attachmentmenu from './Attachmentmenu';
// import './styles/MessageInput.css';

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);

  return (
    <div className="message-input-wrapper">
      <button
        onClick={() => setShowAttachments(!showAttachments)}
        className="attachment-button"
      >
        +
      </button>
      {showAttachments && <Attachmentmenu />}
      <input
        className="message-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="send-button">Send</button>
    </div>
  );
};

export default MessageInput;
