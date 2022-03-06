import { SingleActivity } from ".";
import { deleteRoutineActivity, fetchRoutines } from "../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteRoutineActivity = ({
  routines,
  setRoutines,
  activities,
  token,
  routineIDToDelete,
  routineIdParam,
}) => {
  const handleDeleteRoutineActivity = async () => {
    try {
      const routineActivityToDelete = await deleteRoutineActivity(
        token,
        routineIDToDelete
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoutines = async () => {
    try {
      const routines = await fetchRoutines();
      setRoutines(routines);
      console.log("routines", routines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

  console.log("routines", routines);
  console.log("routineIdParam", routineIdParam);
  console.log("activities", activities);

  return (
    <div className="edit-a-routine-activity">
      <div className="new-routine-activity-form-title"> ACTIVITIES </div>
      <div>
        {routines.map(({activities}) => {
          const { name, description, duration, count, routineId } = activities;
          console.log("routineId", routineId);
          console.log("name", name)
          return (
            <>
              {routineId == routineIdParam && (
                <>
                  <div className="activities" key={routineId}>
                    <div className="activities-name"> {name} </div>
                    <div className="activities-description">
                      {" "}
                      {description}{" "}
                    </div>
                  </div>
                  {duration && (
                    <div className="routine-activities-duration">
                      Duration: {duration}
                    </div>
                  )}
                  {count && (
                    <div className="routine-activities-count">
                      Count: {count}
                    </div>
                  )}
                  )
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default DeleteRoutineActivity;
