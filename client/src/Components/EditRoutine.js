import { AddActivityToRoutine } from ".";

const EditRoutine = ({ token, activities, setActivities }) => {
  return (
    <>
      <AddActivityToRoutine
        token={token}
        activities={activities}
        setActivities={setActivities}
      />
      ;
    </>
  );
};
export default EditRoutine;
