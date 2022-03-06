import { deleteRoutineActivity, fetchRoutines } from "../api";
import { useEffect } from "react";

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
        
      </div>
    </div>
  );
};
export default DeleteRoutineActivity;
