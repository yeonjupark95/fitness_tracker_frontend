import { useState, useEffect } from "react";
import { createRoutine, deleteRoutine, fetchRoutines } from "../api";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
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

  const handleRoutineSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("myRoutines token", token);
      const newRoutines = await createRoutine(name, goal, isPublic, token);
      console.log("newRoutine", newRoutines);
      setRoutines([...routines, newRoutines]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoutineDelete = async (routineIdToDelete) => {
    try {
      const success = await deleteRoutine(routineIdToDelete, token);
      if (success) {
        const newRoutines = routines.filter(
          (routine) => routine._id !== routineIdToDelete
        );
        setRoutines(newRoutines);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

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
            const { id, isPublic, name, goal, creatorId, activities } =
              routine;
            if (user.id === creatorId) {
              return (
                <>
                  <div className="my-routines-routine" key={id}>
                    <div className="my-routines-routine-name">{name}</div>
                    <div className="my-routines-routine-goal">{goal}</div>
                    <div className="my-routines-routine-public">
                      {isPublic ? "Public" : "Only Me"}
                    </div>
                    <h5> Activities: </h5>
                  </div>
                  <div className="my-routines-activities">
                    {activities ? (
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
                  <div className="my-routines-delete">
                    <Button
                      id="delete-button"
                      variant="dark"
                      onClick={() => {
                        handleRoutineDelete(id);
                      }}
                    >
                      DELETE ROUTINE
                    </Button>
                  </div>
                  <div className="my-routines-edit">
                    <Button
                      id="edit-button"
                      variant="dark"
                      onClick={() => {
                        navigate(`/routines/${id}/edit`);
                      }}
                    >
                      EDIT ROUTINE
                    </Button>
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
