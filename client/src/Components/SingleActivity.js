import Card from "react-bootstrap/Card";
const SingleActivity = ({ activities }) => {
  return (
    <div className="activities-wrapper">
      {activities ? (
        activities.length > 0 &&
        activities.map((activity) => {
          const { id, name, description, duration, count } = activity;
          return (
            <>
              <div className="single-activity-card" key={id}>
                <div id="activities-name"> {name} </div>
                <div id="activities-description"> {description} </div>
              </div>
              {duration && (
                <div id="routine-activities-duration">Duration: {duration}</div>
              )}
              {count && <div id="routine-activities-count">Count: {count}</div>}
            </>
          );
        })
      ) : (
        <h5> There are no activitiies to display! </h5>
      )}
    </div>
  );
};

export default SingleActivity;
