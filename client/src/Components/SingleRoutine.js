import Card from "react-bootstrap/Card";

const SingleRoutine = ({ routines }) => {
  return (
    <div className="single-routine">
      <h2>Routines</h2>
      <div className="routines-wrapper">
        {routines.length ? (
          routines.length > 0 &&
          routines.map(
            ({ id, isPublic, name, goal, creatorName, activities }) => {
              return (
                <Card className="single-routine-card" border="secondary">
                  {isPublic && (
                    <div className="routines" key={id}>
                      <Card.Header id="routines-name">
                        {name} by {creatorName}{" "}
                      </Card.Header>
                      <Card.Title id="routines-goal">{goal}</Card.Title>
                      <div id="routine-activities-title">Activities</div>
                    </div>
                  )}
                  {activities.length ? (
                    activities.length > 0 &&
                    activities.map((activity) => {
                      const { id, name, description, duration, count } =
                        activity;
                      return (
                        <>
                          <div className="routine-activities"  key={id}>
                            <Card.Text id="activities-name">
                              {name}
                            </Card.Text>
                            <Card.Text id="activities-description">
                              {description}
                            </Card.Text>
                            <Card.Text id="routine-activities-duration">
                              Duration: {duration}
                            </Card.Text>
                            <Card.Text id="routine-activities-count">
                              Count: {count}
                            </Card.Text>
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <div> There are no activities for this routine. </div>
                  )}
                </Card>
              );
            }
          )
        ) : (
          <h5> There are no routines to display. </h5>
        )}
      </div>
    </div>
  );
};

export default SingleRoutine;
