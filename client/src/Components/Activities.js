import { fetchActivities, createActivity } from "../api";
import { useState, useEffect } from "react";
import SingleActivity from "./SingleActivity";

const Activities = ({ token, activities, setActivities }) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [msg, setMsg] = useState("");
  const [nameExist, setNameExist] = useState(false);

  const handleActivities = async () => {
    try {
      const activities = await fetchActivities();
      setActivities(activities);
      console.log("activities", activities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActivitySubmit = async (event) => {
    event.preventDefault();
    for (let i = 0; i < activities.length; i++) {
      const name = activities[i].name;
      const id = activities[i].id;
      console.log("activityid", id);
      if (newName !== name) {
        try {
          const newActivity = await createActivity(
            newName,
            newDescription,
            token
          );
          if (newActivity) {
            setMsg("");
            setActivities([...activities, newActivity]);
          }
          if (!newActivity) {
            setNameExist(true);
            setMsg("An activity with that name already exists!");
          }
        } catch (error) {
          console.error(error);
        }
        break;
      }
    }
  };

  useEffect(() => {
    handleActivities();
  }, [token]);

  return (
    <div className="activities">
      {token && (
        <div className="activities-wrapper">
          <div className="add-an-activity">
            <div className="new-activity-form-title"> CREATE AN ACTIVITY </div>
            {nameExist && <div>{msg}</div>}
            <form className="new-activity-form" onSubmit={handleActivitySubmit}>
              <input
                id="name-input"
                type="text"
                placeholder="Name*"
                onChange={(event) => setNewName(event.target.value)}
                required
              />
              <input
                id="description-input"
                type="text"
                placeholder="Description*"
                onChange={(event) => setNewDescription(event.target.value)}
                required
              />
              <button id="create-button">CREATE</button>
            </form>
          </div>
        </div>
      )}
      <h2>Activities</h2>
      <SingleActivity activities={activities} />
    </div>
  );
};

export default Activities;