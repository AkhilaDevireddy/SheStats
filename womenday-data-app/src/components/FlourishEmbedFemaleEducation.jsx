const FlourishEmbed = ({ story }) => {
    // story = 'story/3175557' or just '3175557'
    // We'll extract the story id and construct iframe url
  
    const storyId = story.split('/').pop(); // '3175557'
  
    return (
      <iframe
        src={`https://public.flourish.studio/story/${storyId}/embed`}
        width="1000"
        height="750"
        style={{ border: 'none' }}
        allowFullScreen
        title="Flourish Visualization"
      />
    );
};
  
export default FlourishEmbed;
  















// import React, { useEffect, useRef } from "react";

// const FlourishEmbed = ({ story }) => {
//   const flourishRef = useRef(null);
//   console.log(story);

//   useEffect(() => {
//     // Clear previous embed to prevent stale content
//     flourishRef.current.innerHTML = `
//       <div class="flourish-embed flourish-embed-story" data-src="${story}" style="width:1000px; height:750px; min-height:750px;"></div>
//       <noscript>
//         <img src="https://public.flourish.studio/${story}/thumbnail" alt="Flourish visualization" style="width:100%;" />
//       </noscript>
//     `;

//     // console.log(flourishRef.current.innerHTML)

//     // Re-run the Flourish script
//     const script = document.createElement("script");
//     script.src = "https://public.flourish.studio/resources/embed.js";
//     script.async = true;
//     flourishRef.current.appendChild(script);
//   }, [story]); // 👈 re-run effect when story changes

//   return (
//     <div
//       ref={flourishRef}
//       style={{
//         width: "1000px",
//         maxWidth: "1000px",
//         overflow: "hidden",
//       }}
//     />
//   );
// };

// export default FlourishEmbed;















// import React, { useEffect, useRef } from "react";

// const FlourishEmbed = ({ story }) => {
//   const flourishRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://public.flourish.studio/resources/embed.js";
//     script.async = true;
//     flourishRef.current.appendChild(script);
//   }, []);

//   return (
//     <div
//       ref={flourishRef}
//       style={{
//         width: "1000px",
//         maxWidth: "1000px",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         className="flourish-embed flourish-embed-story"
//         data-src="story/3175557"
//         style={{
//           width: "1000px",
//           height: "750px",
//           minHeight: "750px",
//         }}
//       ></div>

//       <noscript>
//         <img
//         //   src="https://public.flourish.studio/story/3175557/thumbnail"
//           src={story}
//           alt="Flourish visualization"
//           style={{ width: "100%" }}
//         />
//       </noscript>
//     </div>
//   );
// };

// export default FlourishEmbed;
