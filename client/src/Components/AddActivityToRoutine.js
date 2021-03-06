import { useState, useEffect } from "react";
import { createActivityToRoutine, fetchActivities } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const AddActivityToRoutine = ({ token, activities, setActivities }) => {
  const [activityId, setActivityId] = useState(0);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const [routineActivity, setRoutineActivity] = useState([]);
  const { ROUTINE_ID } = useParams();

  const handleActivities = async () => {
    try {
      const activities = await fetchActivities();
      setActivities(activities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoutineActivitySubmit = async () => {
    try {
      console.log("activityId", activityId);
      const newRoutineActivity = await createActivityToRoutine(
        activityId,
        ROUTINE_ID,
        duration,
        count,
        token
      );
      setRoutineActivity([...routineActivity, newRoutineActivity]);
      navigate("/myroutines");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleActivities();
  }, [token]);

  return (
    <>
      <div className="add-a-routin-activity">
        <div className="new-routine-activity-form-title"> ADD ACTIVITY </div>
        <form
          className="new-routine-activity-form"
          onSubmit={handleRoutineActivitySubmit}
        >
          <select
            id="activities-name-option"
            value={activityId}
            onChange={(event) => {
              setActivityId(event.target.value);
            }}
          >
            {activities.map((activity) => {
              const { name, id } = activity;
              return <option value={id}>{name}</option>;
            })}
          </select>
          <input
            id="count-input"
            type="text"
            placeholder="count*"
            onChange={(event) => setCount(event.target.value)}
            required
          />
          <input
            id="duration-input"
            type="text"
            placeholder="duration*"
            onChange={(event) => setDuration(event.target.value)}
          />
          <Button
            id="submit-button"
            onClick={() => {
              handleRoutineActivitySubmit();
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddActivityToRoutine;