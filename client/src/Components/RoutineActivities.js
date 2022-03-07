import { useNavigate } from "react-router-dom";
import React from "react";

const RoutineActivities = ({ routineToEdit }) => {
  const navigate = useNavigate();
  const routineActivities = routineToEdit.activities;
  if (!routineActivities) {
    navigate("/myroutines");
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-a-routine-activity">
      <div className="new-routine-activity-form-title"> ACTIVITIES </div>
      {routineActivities.length ? (
        routineActivities.length > 0 &&
        routineActivities.map(({ id, name, description, count, duration }) => {
          return (
            <>
              <div className="routine-activity-to-edit">{name} </div>
              <div>{description} </div>
              <div>Count: {count}</div>
              <div>Duration: {duration}</div>
            </>
          );
        })
      ) : (
        <div>
          There are currently no activities for this routine. Add activities to
          your routine!
        </div>
      )}
    </div>
  );
};
export default RoutineActivities;
