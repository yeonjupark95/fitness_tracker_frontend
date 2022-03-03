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
                    <div className="routines-creator-name">Creator: {creatorName}</div>
                    <div className="routines-goal">{goal}</div>
                    <h5> Activities: </h5>
                  </div>
                )}
                {activities.length
                  ? (activities.length > 0 && 
                    activities.map((activity) => {
                      const { id, name, description, duration, count } = activity;
                      return(
                        <>
                          <div className="routine-activities" key={id}>
                          <div className="routine-activities-name">Name: {name} </div>
                          <div className="routine-activities-description">Description: {description} </div>
                          <div className="routine-activities-duration">Duration: {duration} </div>
                          <div className="routine-activities-count">Count: {count} </div>
                          </div>
                        </>
                      )
                    }))
                  : (<div> There are no activities for this routine. </div>)}
              </>
            );
          }
        )
      ) : (
        <h5> There are no routines to display. </h5>
      )}
    </div>
  );
};

export default Routines;
