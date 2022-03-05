import { fetchRoutines } from "../api";
import { useState, useEffect } from "react";
import SingleRoutine from "./SingleRoutine";

const Routines = (token) => {
  const [routines, setRoutines] = useState([]);
  const handleRoutines = async () => {
    try {
      const newRoutines = await fetchRoutines();
      setRoutines(newRoutines);
      console.log("routines", routines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, [token]);

  return (
    <div className="routines-wrapper">
      <SingleRoutine routines={routines}/>
    </div>
  );
};

export default Routines;
