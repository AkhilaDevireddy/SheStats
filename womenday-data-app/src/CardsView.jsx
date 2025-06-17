import FlourishEmbed from './components/FlourishEmbedFemaleEducation';

const sampleCardsData = {
    'Educational attainment by level of education': [
      { id: 1, story: 'story/3175557'},
    ]}

export default function CardsView({ indicator }) {
    const cards = sampleCardsData[indicator] || [];
    console.log(indicator);

    return (
        <div>
            {cards.map(({ id, story }) => (
                <div key={id} style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    width: "120%",
                    height: "100%"
                }}>
                    <h1></h1>
                    <FlourishEmbed key={story} story={story} />
                </div>
            ))}
        {/* <h1>My Education Data Visualization</h1> */}
        {/* <h1>Female Educational Attainment</h1> */}
        {/* <h1></h1>
        <FlourishEmbed /> */}
        </div>
    );
}


















// export default function CardsView({ topic, indicator }) {
//     const sampleCardsData = {
//     'Educational attainment by level of education': [
//       { id: 1, title: 'At least completed primary', description: '85% girls enrolled', image: '/images/Education/completed_primary.png'},
//     //   { id: 2, title: 'At least completed lower secondary', description: '87% girls enrolled', image: '/images/Education/completed_lower_secondary.png'},
//     //   { id: 3, title: 'At least completed upper secondary', description: '87%', image: '/images/Education/completed_upper_secondary.png'},
//       { id: 4, title: 'At least completed post-secondary', description: '87%', image: '/images/Education/completed_post_secondary.png'},
//       { id: 5, title: 'At least Bachelor\'s or equivalent', description: '87%', image: '/images/Education/atleast_bachelors_or_equivalent.png'},
//       { id: 6, title: 'At least Master\'s or equivalent', description: '87%', image: '/images/Education/atleast_masters_or_equivalent.png'},
//     //   { id: 7, title: 'Doctoral or equivalent', description: '87%', image: '/images/Education/doctoral_or_equivalent.png'},
//     ],
//     'Literacy Rates': [
//       { id: 1, title: 'Adult Female Literacy', description: '75%' },
//       { id: 2, title: 'Youth Female Literacy', description: '90%' },
//     ],
//     'STEM Access': [
//       { id: 1, title: 'Girls in STEM', description: '40% of total students' },
//     ],
//     'Maternal Health': [
//       { id: 1, title: 'Prenatal Care Access', description: '70%' },
//       { id: 2, title: 'Safe Deliveries', description: '65%' },
//     ],
//     // ... add other indicators
//   };
//     const topicVideos = {
//         Education: 'https://www.w3schools.com/html/mov_bbb.mp4',
//         Health: 'https://www.w3schools.com/html/movie.mp4',
//         Empowerment: 'https://www.w3schools.com/html/mov_bbb.mp4',
//     };

//     if (!indicator) {
//       const videoSrc = topicVideos[topic];
//       return videoSrc ? (
//         <video
//           controls
//           width="100%"
//           style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
//         >
//           <source src={videoSrc} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <p>Select an indicator to view more details.</p>
//       );
//     }
  
//     const cards = sampleCardsData[indicator] || [];
  
//     if (cards.length === 0) return <p>No data available for {indicator}.</p>;
  
//     return (
//         // <div className="flourish-embed" data-src="story/3175557">
//         //     <script src="https://public.flourish.studio/resources/embed.js"></script>
//         //     <noscript><img src="https://public.flourish.studio/story/3175557/thumbnail" width="100%" alt="visualization" /></noscript>
//         // </div>
//       <div className="cards-container">
//         {cards.map(({ id, title, description, image }) => (
//           <div key={id} className="card">
//             <div className="card-image-container">
//                 <img src={image} alt="image not found" className="card-image"/>
//             </div>
//             <h3>{title}</h3>
//             <p>{description}</p>
//           </div>
//         ))}
//       </div>
//     );
// }
  














// const sampleCardsData = {
//     'School Enrollment': [
//       { id: 1, title: 'Enrollment Rate 2020', description: '85% girls enrolled' },
//       { id: 2, title: 'Enrollment Rate 2021', description: '87% girls enrolled' },
//     ],
//     'Literacy Rates': [
//       { id: 1, title: 'Adult Female Literacy', description: '75%' },
//       { id: 2, title: 'Youth Female Literacy', description: '90%' },
//     ],
//     'STEM Access': [
//       { id: 1, title: 'Girls in STEM', description: '40% of total students' },
//     ],
//     'Maternal Health': [
//       { id: 1, title: 'Prenatal Care Access', description: '70%' },
//       { id: 2, title: 'Safe Deliveries', description: '65%' },
//     ],
//     // ... add other indicators
//   };
  
//   export default function CardsView({ indicator }) {
//     if (!indicator) {
//       return <p>Please select an indicator to view details.</p>;
//     }
  
//     const cards = sampleCardsData[indicator] || [];
  
//     if (cards.length === 0) return <p>No data available for {indicator}.</p>;
  
//     return (
//       <div className="cards-container">
//         {cards.map(({ id, title, description }) => (
//           <div key={id} className="card">
//             <h3>{title}</h3>
//             <p>{description}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  