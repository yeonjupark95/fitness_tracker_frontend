import { SingleActivity } from ".";
import { deleteRoutineActivity } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteRoutineActivity = ({ activities, routineId }) => {
  return (
    <div className="edit-a-routine">
    <div className="new-routine-form-title"> ACTIVITIES </div>
    <div>
        {activities.map((activity)=>{
            const { id, name, description, duration, count, routineActivityId } = activity;
        })}
    </div>
  </div>
  );
};
export default DeleteRoutineActivity;
