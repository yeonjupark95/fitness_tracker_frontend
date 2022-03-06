import { useNavigate } from "react-router-dom";
import { deleteRoutineActivity } from "../api";

const RoutineActivities = ({ routineToEdit, setActivities, token, user }) => {
const navigate = useNavigate();

  const routineActivities = routineToEdit.activities;
  if (!routineActivities) {
    navigate("/myroutines");
    return <div>Loading...</div>;
  }

  console.log("routineToEdit", routineToEdit);
  console.log("routineActivities", routineActivities);

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
              <button>Edit</button>
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
