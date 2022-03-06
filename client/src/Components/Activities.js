import { fetchActivities, createActivity } from "../api";
import { useState, useEffect } from "react";
import SingleActivity from "./SingleActivity";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Activities = ({ token, activities, setActivities }) => {
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [errMsg, setErrMsg] = useState("");
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
    activities.map(({ name }) => {
      console.log("name, newName", name, newName);
      if (newName === name) {
        setNameExist(true);
        setErrMsg("This activity already exists");
        console.log("nameExist inside if", nameExist);
      }
    });
    console.log("nameExist outside map", nameExist);
    if (!nameExist) {
      try {
        console.log("nameExist", nameExist);
        const newActivity = await createActivity(
          newName,
          newDescription,
          token
        );
        console.log("newActivity", newActivity);
        setActivities([...activities, newActivity]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    handleActivities();
  }, [token]);

  useEffect(() => {
    handleActivitySubmit();
  }, [nameExist]);

  return (
    <div className="activities">
      {token && (
        <div className="activities-wrapper">
          <div className="add-an-activity">
            <div className="new-activity-form-title"> CREATE AN ACTIVITY </div>
            {nameExist ? <div>{errMsg}</div> : null}
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
