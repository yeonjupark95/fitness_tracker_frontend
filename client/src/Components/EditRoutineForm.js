import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {editRoutine } from "../api";

const EditRoutineForm = ({ token, routines, setRoutines, handleRoutines }) => {
  const params = useParams();
  const [routineToEdit, setRoutineToEdit] = useState([]);
  const { id } = params;
  const navigate = useNavigate();

  console.log("routines", routines);

  const handleEdit = async (event) => {
    try {
      event.preventDefault();
      const newRoutine = await editRoutine(id, routineToEdit, token);
      setRoutineToEdit(newRoutine);
      navigate("/myroutines");
    } catch (error) {
      console.erorr(error);
    }
  };

  for (let i = 0; i < routines.length; i++) {
    if (routines[i].id === id) {
      const routineName = routines[i].name;
      const routineGoal = routines[i].goal;
    }
  }
  return (
    <div className="edit-a-routine">
      <div className="new-routine-form-title"> EDIT YOUR ROUTINE </div>
      <form className="edit-routine-form">
        <input
          id="name-input"
          type="text"
          placeholder="Name*"
          // onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          id="goal-input"
          type="text"
          placeholder="Goal*"
          // onChange={(event) => setGoal(event.target.value)}
          required
        />
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
  // return null;
};

export default EditRoutineForm;
