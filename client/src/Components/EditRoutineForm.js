import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { RoutineActivities } from ".";
import { useNavigate } from "react-router-dom";
import { editRoutine, fetchRoutines } from "../api";

const EditRoutineForm = ({
  token,
  routines,
  setRoutines,
  routineId,
  activities,
  setActivities,
}) => {
  const [routineToEdit, setRoutineToEdit] = useState(null);
  const navigate = useNavigate();

  console.log("routinetoEdit", routineToEdit);

  const handleRoutines = async () => {
    try {
      const routines = await fetchRoutines();
      setRoutines(routines);
      console.log("routines", routines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const newRoutine = await editRoutine(routineId, routineToEdit, token);
      console.log("you clicked handle Edit");
      setRoutineToEdit(newRoutine);
      navigate("/myroutines");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const routineToEdit = routines.find((routine) => {
      return routine.id === routineId * 1;
    });
    setRoutineToEdit(routineToEdit);
  }, [routines]);
  
  if (!routineToEdit) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="edit-a-routine">
        <div className="new-routine-form-title"> EDIT YOUR ROUTINE </div>
        <form className="edit-routine-form" onSubmit={handleEdit}>
          {routines.map((routine) => {
            const { id } = routine;
            return (
              <>
                {id == routineId && (
                  <>
                    <input
                      id="name-input"
                      type="text"
                      value={routineToEdit.name}
                      onChange={(event) =>
                        setRoutineToEdit({
                          ...routineToEdit,
                          name: event.target.value,
                        })
                      }
                      required
                    />
                    <input
                      id="goal-input"
                      type="text"
                      placeholder="Goal*"
                      value={routineToEdit.goal}
                      onChange={(event) =>
                        setRoutineToEdit({
                          ...routineToEdit,
                          goal: event.target.value,
                        })
                      }
                      required
                    />
                    <button id="submit-button">Submit</button>
                  </>
                )}
              </>
            );
          })}
        </form>
      </div>
      <div>
        <RoutineActivities
          token={token}
          activities={activities}
          setActivities={setActivities}
          routines={routines}
          setRoutines={setRoutines}
          routineToEdit={routineToEdit}
        />
      </div>
    </>
  );
};

export default EditRoutineForm;
