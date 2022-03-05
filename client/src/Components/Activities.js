import { fetchActivities, createActivity } from "../api";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import SingleActivity from "./SingleActivity";

const Activities = (token) => {
  const [activities, setActivities] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");

  const handleActivities = async () => {
    try {
      const newActivities = await fetchActivities();
      setActivities(newActivities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActivitySubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("hello");
      const newActivity = await createActivity(
        name,
        description,
        duration,
        count,
        token
      );
      console.log("newActivity", newActivity);
      setActivities([...activities, newActivity]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleActivities();
  }, []);

  return (
    <>
      <div className="add-an-activity">
        <div className="new-activity-form-title"> CREATE AN ACTIVITY </div>
        <form className="new-activity-form" onSubmit={handleActivitySubmit}>
          <input
            id="name-input"
            type="text"
            placeholder="Name*"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            id="description-input"
            type="text"
            placeholder="Description*"
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <button id="create-button">CREATE</button>
        </form>
      </div>
      <SingleActivity activities={activities} />
    </>
  );
};

export default Activities;
