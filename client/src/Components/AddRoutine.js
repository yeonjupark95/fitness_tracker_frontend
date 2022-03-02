import { useState } from "react";
import { createRoutine } from "../api";
//be shown a form to create a new routine
// the form should have text fields for name and goal
// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine
const AddRoutine = ({ token, routine, setRoutine }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [activitiesName, setActivitiesName] = useState("");
  const [activitiesDescription, setActivitiesDescription] = useState("");
  const [activitiesCount, setActivityCount] = useState("");
  const [activitiesDuration, setActivitiesDuration] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const newRoutine = await createRoutine()
    } catch (error) {
      console.error(error);
    }
  };
  
  return(
    <>
    </>
  )
};

export default AddRoutine;
