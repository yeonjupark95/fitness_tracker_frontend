import { fetchRoutines } from "../api";
import { useState, useEffect } from "react";

const Routines = (token) => {
  const [routines, setRoutines] = useState([]);

  const handleRoutines = async () => {
    try {
      const newRoutines = await fetchRoutines();
      setRoutines(newRoutines);
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
          ({
            id,
            isPublic,
            name,
            goal,
            creatorName,
            activities: [
              { name: activitiesName, description, duration, count },
            ],
          }) => {
            return (
              <>
                {isPublic && (
                  <div className="routines" key={id}>
                    <div className="routines-name">{name}</div>
                    <div className="routines-creator-name">{creatorName}</div>
                    <div className="routines-goal">{goal}</div>
                    <div className="routines-activities">
                      <div className="activities-id">{activitiesName}</div>
                      <div className="activities-name">{description}</div>
                      <div className="activities-description">
                        Duration: {duration}
                      </div>
                      <div className="activities-count">Count: {count}</div>
                    </div>
                  </div>
                )}
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
