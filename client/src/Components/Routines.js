import { fetchRoutines } from "../api";
import { useState, useEffect } from "react";

const Routines = (token) => {
  const [routines, setRoutines] = useState([]);
  const handleRoutines = async () => {
    try {
      const newRoutines = await fetchRoutines();
      setRoutines(newRoutines);
      console.log("routines", routines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

  return (
    <div className="routines-wrapper">
      <h2>Routines</h2>
      {routines.length ? (
        routines.length > 0 &&
        routines.map(
          ({ id, isPublic, name, goal, creatorName, activities }) => {
            return (
              <>
                {isPublic && (
                  <div className="routines" key={id}>
                    <div className="routines-name">{name}</div>
                    <div className="routines-creator-name">{creatorName}</div>
                    <div className="routines-goal">{goal}</div>
                    <div className="routines-activities">
                      {/* <div className="activities-name">{activities}</div>
                      <div className="activities-description">
                        {activities.description}
                      </div>
                      <div className="activities-duration">
                        Duration: {activities.duration}
                      </div>
                      <div className="activities-count">
                        Count: {activities.count}
                      </div> */}
                    </div>
                  </div>
                )}
                {/* {isPublic && activities.length>0 (
                  
                )} */}
              </>
            );
          }
        )
      ) : (
        <h5> There are no routines to display! </h5>
      )}
    </div>
  );
};

export default Routines;
