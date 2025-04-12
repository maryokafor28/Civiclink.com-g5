import React from 'react';
// import './styles/MessageBubble.css';

interface MessageProps {
  from: 'user' | 'admin';
  text: string;
  image?: boolean;
  time: string;
}

const MessageBubble: React.FC<MessageProps> = ({ from, text, image, time }) => {
  const isUser = from === 'user';

  return (
    <div className={`message-row ${isUser ? 'right' : 'left'}`}>
      <div className={`message-bubble ${isUser ? 'user' : 'admin'}`}>
        <p>{text}</p>
        {image && (
          <img src="/pothole.jpg" alt="attachment" className="message-image" />
        )}
        <div className="message-time">{time}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
