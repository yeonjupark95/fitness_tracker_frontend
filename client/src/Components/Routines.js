import { fetchRoutines } from "../api";
import { useEffect } from "react";
import SingleRoutine from "./SingleRoutine";

const Routines = ({ token, routines, setRoutines }) => {
  const handleRoutines = async () => {
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

  return (
    <div className="routines-wrapper">
      <SingleRoutine routines={routines} />
    </div>
  );
};

export default Routines;