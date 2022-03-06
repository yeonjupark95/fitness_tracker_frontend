import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteRoutineActivity, editRoutineActivity } from "../api";
import React from "react";

const RoutineActivities = ({ routineToEdit, setActivities, setRoutines, token }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState()

  const routineActivities = routineToEdit.activities;
  if (!routineActivities) {
    navigate("/myroutines");
    return <div>Loading...</div>;
  }

  console.log("routineToEdit", routineToEdit);
  console.log("routineActivities", routineActivities);
  console.log("RAtoken", token);

  const handleRADelete = async (routineActivityId) => {
    try {
      const success = await deleteRoutineActivity(token, routineActivityId);
      if (success) {
        const newRoutineActivities = routineActivities.filter(
          (routineActivity) => routineActivity.id !== routineActivityId
        );
        setActivities(newRoutineActivities);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleRAEdit = async (routineActivityId) => {
    try {
      const updatedRA = {};
      
    } catch (error) {
      console.error(error);
    }
  };

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
              <button
                onClick={() => {
                  handleRADelete(id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleRADelete(id);
                }}
              >
                Delete
              </button>
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
