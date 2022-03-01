// import { fetchActivities } from "../api";
// import { useState, useEffect } from "react";

// const Activities = (token) => {
//   const [activities, setActivities] = useState([]);

//   const handleActivities = async () => {
//     try {
//       const newActivities= await fetchActivities();
//       setActivities(newActivities);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     handleActivities();
//   }, []);

//   return (
//     <div className="Activities-wrapper">
//       <h2>Activities</h2>
//       {activities.length ? (
//         activities.length > 0 &&
//         activities.map(({ name, description}) => {
//           return (
//             <div className="Activities" key={id}>
//               {name}
//               {goal}
//               {creatorName}
//             </div>
//           );
//         })
//       ) : (
//         <h5> There are no Activities to display! </h5>
//       )}
//     </div>
//   );
// };

// export default Activities;