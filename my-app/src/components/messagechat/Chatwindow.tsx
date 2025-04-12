import React from 'react';
import Messagebubble from './Messagebubble';
import Messageinput from './Messageinput';
import './Chatwindow.css';


interface Message {
  from: 'user' | 'admin';
  text: string;
  image?: boolean;
  time: string;
}

const messages: Message[] = [
  { from: 'user', text: 'Id like to report a pothole...', time: '12:22 pm' },
  { from: 'admin', text: 'Can you describe the spot...', time: '12:23 pm' },
  { from: 'user', text: 'Its after the second speed bump...', image: true, time: '12:24 pm' },
  { from: 'admin', text: 'Got it, Ive informed the team...', time: '12:25 pm' }
];

const ChatWindow: React.FC = () => {
  return (
    <div className="chat-window">
      <div className="chat-header">
        Hon. Tunde Ogunyemi <span className="status">Online</span>
      </div>
      <div className="chat-body">
        {messages.map((msg, i) => (
          <Messagebubble key={i} {...msg} />
        ))}
      </div>
      <Messageinput />
    </div>
  );
};

export default ChatWindow;
