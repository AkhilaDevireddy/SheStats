import React, { useState } from 'react'
import { FiBook, FiBriefcase, FiTrendingUp, FiUsers, FiCpu } from 'react-icons/fi'
// import { MdHealthAndSafety } from 'react-icons/md'
import FlourishEmbed from './components/FlourishEmbed'
import SheStatsLogo from './components/sheStatsLogo'
import './index.css'
import { MdSchool, MdHealthAndSafety, MdWork, MdTrendingUp, MdGroup, MdComputer } from 'react-icons/md'


// const topics = [
//   { name: 'EDUCATION', icon: <FiBook /> },
//   { name: 'HEALTH', icon: <MdHealthAndSafety /> },
//   { name: 'EMPLOYMENT', icon: <FiBriefcase /> },
//   { name: 'ENTREPRENEURSHIP', icon: <FiTrendingUp /> },
//   { name: 'LEADERSHIP', icon: <FiUsers /> },
//   { name: 'TECHNOLOGY', icon: <FiCpu /> },
// ]

const topics = [
  { name: 'EDUCATION', icon: <MdSchool /> },
  { name: 'HEALTH', icon: <MdHealthAndSafety /> },
  { name: 'EMPLOYMENT', icon: <FiBriefcase /> },
  { name: 'ENTREPRENEURSHIP', icon: <MdTrendingUp /> },
  { name: 'LEADERSHIP', icon: <MdGroup /> },
  { name: 'TECHNOLOGY', icon: <MdComputer /> },
]



// const App = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null)

//   return (
//     <div className="app-container">
//       {/* Make header clickable to go home */}
//       <header
//         className="header"
//         onClick={() => setSelectedTopic(null)}
//         style={{ cursor: 'pointer' }}
//         title="Back to Home"
//       >
//         <SheStatsLogo size={48} color="#0A2540" />
//         <h1 className="title">She-Stats</h1>
//       </header>

//       {!selectedTopic ? (
//         <>
//           <div className="tile-container">
//             {topics.map((topic) => (
//               <div
//                 key={topic.name}
//                 className="tile"
//                 onClick={() => setSelectedTopic(topic.name)}
//               >
//                 <div className="icon">{topic.icon}</div>
//                 <h2>{topic.name}</h2>
//                 <p>Explore insights about {topic.name}</p>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="embed-container">
//           {/* Remove the old home button here */}

//           <FlourishEmbed topic={selectedTopic} />
//         </div>
//       )}
//     </div>
//   )
// }

// export default App








const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null)

  return (
    <div className="app-container">
      <header
        className="header"
        onClick={() => setSelectedTopic(null)}
        style={{ cursor: 'pointer' }}
        title="Back to Home"
      >
        <SheStatsLogo size={48} color="#0A2540" />
        <h1 className="title">She-Stats</h1>
      </header>
  <div className="starfield" />
  {!selectedTopic ? (
    <>
      {/* <header className="header">
        <SheStatsLogo size={48} color="#0A2540" />
        <h1 className="title">She-Stats</h1>
      </header> */}
      {/* <h1 className="title">She-Stats</h1> */}
      {topics.map((topic) => (
        <div
          key={topic.name}
          className="tile"
          onClick={() => setSelectedTopic(topic.name)}
        >
          <div className="icon">{topic.icon}</div>
          <h2>{topic.name}</h2>
          <p>Explore insights about {topic.name}</p>
        </div>
      ))}
    </>
  ) : (
    <div className="embed-container" style={{ width: '100%', height: '100vh' }}>
      <button
        className="home-button"
        onClick={() => setSelectedTopic(null)}
        title="Back to Home"
      >
      </button>
      <FlourishEmbed topic={selectedTopic} />
    </div>
  )}
</div>
  )
}

export default App














// import React, { useState } from 'react'
// import FlourishEmbed from './components/FlourishEmbed'
// import './index.css'

// const topics = [
//   {
//     name: 'EDUCATION',
//     image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     name: 'HEALTH',
//     image: 'https://images.unsplash.com/photo-1588776814546-4c7356fa6d9e?auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     name: 'EMPLOYMENT',
//     image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     name: 'ENTREPRENEURSHIP',
//     image: 'https://images.unsplash.com/photo-1556740764-3a0b2a7a7aeb?auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     name: 'LEADERSHIP',
//     image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80'
//   },
//   {
//     name: 'TECHNOLOGY',
//     image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'
//   }
// ]

// const App = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null)

//   return (
//     <div className="app-container">
//       {!selectedTopic ? (
//         <>
//           <h1 className="title">She-Stats</h1>
//           <div className="tile-container">
//             {topics.map((topic) => (
//               <div
//                 key={topic.name}
//                 className="tile"
//                 onClick={() => setSelectedTopic(topic.name)}
//                 style={{ backgroundImage: `url(${topic.image})` }}
//               >
//                 <div className="overlay" />
//                 <h2>{topic.name}</h2>
//                 <p>Explore insights about {topic.name}</p>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div className="embed-container">
//           <button
//             className="home-button"
//             onClick={() => setSelectedTopic(null)}
//             title="Back to Home"
//           >
//             🏠 Home
//           </button>
//           <FlourishEmbed topic={selectedTopic} />
//         </div>
//       )}
//     </div>
//   )
// }

// export default App
