import React from 'react'

const flourishURLs = {
    EDUCATION: 'https://public.flourish.studio/story/3175557/embed',
    HEALTH: 'https://public.flourish.studio/story/3178324/embed',
    EMPLOYMENT: 'https://public.flourish.studio/visualisation/your_employment_embed_url',
    ENTREPRENEURSHIP: 'https://public.flourish.studio/visualisation/your_entrepreneurship_embed_url',
    LEADERSHIP: 'https://public.flourish.studio/visualisation/your_leadership_embed_url',
    TECHNOLOGY: 'https://public.flourish.studio/visualisation/your_technology_embed_url',
}

const FlourishEmbed = ({ topic }) => {  
    return (
      <iframe
        src={flourishURLs[topic]}
        // width="1000"
        height="750"
        width="100%"
        // height="100%"
        style={{ border: 'none' }}
        allowFullScreen
        title="Flourish Visualization"
      />
    );
};
  
export default FlourishEmbed;


// const flourishURLs = {
//   EDUCATION: 'https://public.flourish.studio/story/3175557/embed',
//   HEALTH: 'https://public.flourish.studio/story/3178324/embed',
//   EMPLOYMENT: 'https://public.flourish.studio/visualisation/your_employment_embed_url',
//   ENTREPRENEURSHIP: 'https://public.flourish.studio/visualisation/your_entrepreneurship_embed_url',
//   LEADERSHIP: 'https://public.flourish.studio/visualisation/your_leadership_embed_url',
//   TECHNOLOGY: 'https://public.flourish.studio/visualisation/your_technology_embed_url',
// }

// const FlourishEmbed = ({ topic }) => {
//   return (
//     <div className="flourish-wrapper">
//       <iframe
//         title={topic}
//         src={flourishURLs[topic]}
//         frameBorder="0"
//         allowFullScreen
//         className="flourish-iframe"
//       />
//     </div>
//   )
// }

// export default FlourishEmbed
