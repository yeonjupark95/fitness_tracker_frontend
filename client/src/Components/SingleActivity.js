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
              <Card className="single-activity-card" key={id}>
              <Card.Header id="activities-name"> {name} </Card.Header>
                <Card.Text id="activities-description"> {description} </Card.Text>
                </Card>
              {duration && (
                <div id="routine-activities-duration">Duration: {duration}</div>
              )}
              {count && <div id="routine-activities-count">Count: {count}</div>}
            </>
          );
        })
      ) : (
        <h5> There are no activities to display! </h5>
      )}
    </div>
  );
};

export default SingleActivity;