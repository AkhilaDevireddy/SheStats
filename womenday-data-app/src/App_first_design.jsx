import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CardsView from './CardsView';
import './styles.css';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('Education');
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    setSelectedIndicator(null);
  };
  console.log(selectedIndicator);

  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar
        selectedTopic={selectedTopic}
        selectedIndicator={selectedIndicator}
        onSelectTopic={handleSelectTopic}
        onSelectIndicator={setSelectedIndicator}
      />
      <main className="main">
        {/* <h1>{selectedIndicator || selectedTopic}</h1> */}
        <h1></h1>
        <CardsView key={selectedIndicator} indicator={selectedIndicator} />
      </main>
    </div>
  );
}
