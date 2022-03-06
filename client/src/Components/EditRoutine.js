import { AddActivityToRoutine } from ".";
import EditRoutineForm from "./EditRoutineForm";
import { useParams } from "react-router-dom";

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
        activities={activities}
        setActivities={setActivities}
        routineId={ROUTINE_ID}
      />
      <AddActivityToRoutine
        token={token}
        activities={activities}
        setActivities={setActivities}
      />
    </>
  );
};
export default EditRoutine;
