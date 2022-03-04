import { useState, useEffect } from "react";
import { createRoutine, fetchRoutines } from "../api";
import { useNavigate } from "react-router-dom";
//be shown a form to create a new routine
// the form should have text fields for name and goal
// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine
const MyRoutines = ({ token, routines, setRoutines, user }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [activitiesName, setActivitiesName] = useState("");
  const [activitiesDescription, setActivitiesDescription] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  const handleRoutines = async (routines) => {
    try {
      const routines = await fetchRoutines();
      setRoutines(routines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

  const handleRoutineSubmit = async (event) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="add-a-routine">
        <div className="new-routine-form-title"> CREATE A ROUTINE </div>
        <form className="new-routine-form" onSubmit={handleRoutineSubmit}>
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
      <div className="my-routines">
        {routines.length > 0 &&
          routines.map((routine) => {
            const { isPublic, name, goal, creatorName, activities } = routine;
            if (user.username === creatorName) {
              return (
                <>
                  <div className="my-routines-routine">
                    <div className="my-routines-routine-name">{name}</div>
                    <div className="my-routines-routine-goal">{goal}</div>
                    <div className="my-routines-routine-public">
                      {isPublic ? "Public" : "Only Me"}
                    </div>
                    <h5> Activities: </h5>
                  </div>
                  <div className="my-routines-activities">
                    {activities.length ? (
                      activities.length > 0 &&
                      activities.map((activity) => {
                        const { id, name, description, duration, count } =
                          activity;
                        return (
                          <>
                            <div className="routine-activities" key={id}>
                              <div className="routine-activities-name">
                                Name: {name}
                              </div>
                              <div className="routine-activities-description">
                                Description: {description}
                              </div>
                              <div className="routine-activities-duration">
                                Duration: {duration}
                              </div>
                              <div className="routine-activities-count">
                                Count: {count}
                              </div>
                            </div>
                          </>
                        );
                      })
                    ) : (
                      <div> There are no activities for this routine. </div>
                    )}
                  </div>
                </>
              );
            }
          })}
      </div>
    </>
  );
};

export default MyRoutines;
