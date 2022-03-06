const RoutineActivities = ({ routineToEdit }) => {
  if (!routineToEdit) {
    return <div>Loading...</div>;
  }
  const routineToEditVals = Object.values(routineToEdit);
  const routineActivity = routineToEditVals[6];
  console.log("routinetoeditvalues", routineToEditVals);
  console.log("routinetactivity", routineActivity);

  return (
    <div className="edit-a-routine-activity">
      <div className="new-routine-activity-form-title"> ACTIVITIES </div>
      {routineActivity.map(({ name, description, count, duration }) => {
        return (
          <>
            <div className="routine-activity-to-edit">{name} </div>
            <div>{description} </div>
            <div>Count: {count}</div>
            <div>Duration: {duration}</div>
            <button>Edit</button>
            <button>Delete</button>
          </>
        );
      })}
      <div></div>
    </div>
  );
};
export default RoutineActivities;
