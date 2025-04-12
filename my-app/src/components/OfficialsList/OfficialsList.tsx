
import './OfficialsList.css';
import  icon from './Ellipse 3.png'
const officials = [
  {
    name: 'Hon Peter Elisha',
    title: 'Local Government Rep',
    timesContacted: 'Contacted 3 times this month',
  },
  {
    name: 'Hon Peter Elisha',
    title: 'Local Government Rep',
    timesContacted: 'Contacted 2 times this month',
  },
  {
    name: 'Hon Peter Elisha',
    title: 'Local Government Rep',
    timesContacted: 'Contacted 1 time this month',
  },
];

const OfficialsList = () => {
  return (
    <div className="officials-section">
      <h3>Recently Contacted Officials</h3>
      <div className="officials-list">
        {officials.map((official, index) => (
          <div key={index} className="official-card">
            <div><img src={icon} alt="" /></div>
            <div className="official-info">
              <div className="official-name">{official.name}</div>
              <div className="official-title">{official.title}</div>
              <div className="official-contact">{official.timesContacted}</div>
            </div>
            <button className="message-btn">Message</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialsList;
