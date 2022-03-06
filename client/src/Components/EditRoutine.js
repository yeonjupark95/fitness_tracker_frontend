import { AddActivityToRoutine, DeleteRoutineActivity } from ".";
import EditRoutineForm from "./EditRoutineForm";
import { useParams } from "react-router-dom";
// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine
const EditRoutine = ({
  token,
  activities,
  setActivities,
  routines,
  setRoutines,
}) => {
  const params = useParams();
  const { ROUTINE_ID } = params;
  console.log("editroutineid", ROUTINE_ID);
  return (
    <>
      <EditRoutineForm
        token={token}
        routines={routines}
        setRoutines={setRoutines}
        routineId={ROUTINE_ID}
      />
      <AddActivityToRoutine
        token={token}
        activities={activities}
        setActivities={setActivities}
      />
      <DeleteRoutineActivity
        token={token}
        activities={activities}
        setActivities={setActivities}
        routines={routines}
        setRoutines={setRoutines}
        routineIdParam={ROUTINE_ID}
      />
    </>
  );
};
export default EditRoutine;
