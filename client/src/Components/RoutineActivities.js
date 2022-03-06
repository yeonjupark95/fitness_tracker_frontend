import { useNavigate } from "react-router-dom";

const RoutineActivities = ({ routineToEdit }) => {
  const navigate = useNavigate();
  if (!routineToEdit) {
    return <div>Loading...</div>;
  }

  const routineActivity = routineToEdit.activities;
  if (!routineActivity){
    navigate("/myroutines");
    return <div>Loading...</div>;
  }
  console.log("routineActivity", routineActivity)

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
  // return null;
};
export default RoutineActivities;
