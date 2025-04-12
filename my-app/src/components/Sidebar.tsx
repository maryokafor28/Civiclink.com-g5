import React from 'react';
import '../styles/Sidebar.css';

interface Contact {
  name: string;
  time: string;
  active?: boolean;
}

const contacts: Contact[] = [
  { name: 'Chioma', time: '12:22' },
  { name: 'Mr. Obi', time: '12:21' },
  { name: 'Hon. Tunde Ogunyemi', time: '09:00', active: true },
  { name: 'Mr. Emeka', time: 'Yesterday' }
];

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Messages</div>
      <input className="sidebar-search" placeholder="Search" />
      <ul className="contact-list">
        {contacts.map((c, i) => (
          <li key={i} className={`contact-item ${c.active ? 'active' : ''}`}>
            {c.name}
            <span className="contact-time">{c.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
