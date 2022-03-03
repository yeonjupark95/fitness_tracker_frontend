import { useState } from "react";
import { createRoutine } from "../api";
import { useNavigate } from "react-router-dom";
//be shown a form to create a new routine
// the form should have text fields for name and goal
// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine
const AddRoutine = ({ token }) => {
  const [routines, setRoutines] = useState([]);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [activitiesName, setActivitiesName] = useState("");
  const [activitiesDescription, setActivitiesDescription] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const newRoutine = await createRoutine(
        name,
        goal,
        isPublic,
        activitiesName,
        activitiesDescription,
        duration,
        count,
        token
      );
      console.log("newRoutine", newRoutine);
      setRoutines([...routines, newRoutine]);
      navigate("/routines");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-a-routine">
      <div className="new-routine-form-title"> CREATE A ROUTINE </div>
      <form className="new-routine-form" onSubmit={handleSubmit}>
        <input
          id="name-input"
          type="text"
          placeholder="Name*"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          id="goal-input"
          type="text"
          placeholder="Goal*"
          onChange={(event) => setGoal(event.target.value)}
          required
        />
        <input
          id="checkbox"
          type="checkbox"
          value={isPublic}
          onChange={(event) => setIsPublic(event.target.checked)}
        />
        <label htmlFor="checkbox">Public</label>
        <button id="create-button">CREATE</button>
      </form>
    </div>
  );
};

export default AddRoutine;
