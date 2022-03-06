import { fetchActivities, createActivity } from "../api";
import { useState, useEffect } from "react";
import SingleActivity from "./SingleActivity";

const Activities = ({ token, activities, setActivities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    try {
      event.preventDefault();
      const newActivity = await createActivity(name, description, token);
      console.log("newActivity", newActivity);
      setActivities([...activities, newActivity]);
    } catch (error) {
      console.error(error);
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
        </div>
      )}
      <h2>Activities</h2>
      <SingleActivity activities={activities} />
    </div>
  );
};

export default Activities;
