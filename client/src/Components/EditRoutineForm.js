import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editRoutine, fetchRoutines } from "../api";

const EditRoutineForm = ({ token, routines, setRoutines, routineId }) => {
  const [routineToEdit, setRoutineToEdit] = useState([]);
  const navigate = useNavigate();

  const handleRoutines = async () => {
    try {
      const routines = await fetchRoutines();
      setRoutines(routines);
      console.log("routines", routines);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("routines", routines);

  const handleEdit = async (event) => {
    try {
      event.preventDefault();
      const newRoutine = await editRoutine(routineId, routineToEdit, token);
      setRoutineToEdit(newRoutine);
      navigate("/myroutines");
    } catch (error) {
      console.erorr(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

  console.log("routineID", routineId);
  return (
    <div className="edit-a-routine">
      <div className="new-routine-form-title"> EDIT YOUR ROUTINE </div>
      <form className="edit-routine-form">
        {routines.map((routine) => {
          const { id, name, goal } = routine;
          return (
            <>
              {id == routineId && (
                <>
                  <input
                    id="name-input"
                    type="text"
                    defaultValue={name}
                    // onChange={(event) => setName(event.target.value)}
                    required
                  />
                  <input
                    id="goal-input"
                    type="text"
                    placeholder="Goal*"
                    defaultValue={goal}
                    // onChange={(event) => setGoal(event.target.value)}
                    required
                  />
                </>
              )}
            </>
          );
        })}
        <Button
          id="submit-button"
          onClick={() => {
            handleEdit();
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditRoutineForm;
