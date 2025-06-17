import { useState } from 'react';


const topicItems = {
  Education: ['Educational attainment by level of education', 'Literacy Rates', 'STEM Access'],
  Health: ['Maternal Health', 'Nutrition', 'Access to Care'],
  Empowerment: ['Labor Participation', 'Leadership', 'Legal Rights'],
};

export default function Sidebar({
  selectedTopic,
  selectedIndicator,
  onSelectTopic,
  onSelectIndicator,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [collapsed, setCollapsed] = useState(false); // NEW

  const toggleDropdown = (topic) => {
    setOpenDropdown((prev) => (prev === topic ? null : topic));
  };

  const handleTopicClick = (topic) => {
    onSelectTopic(topic);
    toggleDropdown(topic);
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
        ☰
      </button>
      {Object.entries(topicItems).map(([topic, indicators]) => (
        <div key={topic} className="dropdown">
          <button
            className={`sidebar-item ${selectedTopic === topic ? 'active' : ''}`}
            onClick={() => handleTopicClick(topic)}
          >
            <span
              className={`arrow ${openDropdown === topic ? 'open' : ''}`}
              aria-hidden="true"
            >
              ▼
            </span>
            <span className="topic-label">{collapsed ? topic[0] : topic}</span>
          </button>
          {openDropdown === topic && !collapsed && (
            <ul className="dropdown-list">
              {indicators.map((indicator, idx) => (
                <li key={idx}>
                  <button
                    className={`dropdown-subitem ${
                      selectedIndicator === indicator ? 'active-subitem' : ''
                    }`}
                    onClick={() => onSelectIndicator(indicator)}
                    // onClick={() => {
                    //   if (selectedIndicator === indicator) {
                    //     onSelectIndicator(null); // reset first
                    //     setTimeout(() => onSelectIndicator(indicator), 0); // then re-select
                    //   } else {
                    //     onSelectIndicator(indicator);
                    //   }
                    // }}
                  >
                    {indicator}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
}
