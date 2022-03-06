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
                <Card.Title id="activities-description">
                  {" "}
                  {description}{" "}
                </Card.Title>
              </Card>
              {duration && (
                <Card.Text id="routine-activities-duration">
                  Duration: {duration}
                </Card.Text>
              )}
              {count && (
                <Card.Text id="routine-activities-count">
                  Count: {count}
                </Card.Text>
              )}
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
