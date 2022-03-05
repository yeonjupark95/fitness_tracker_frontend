import Card from "react-bootstrap/Card";

const SingleRoutine = ({ routines }) => {
  return (
    <>
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
                      <h5 id="routine-activities">Activities</h5>
                    </div>
                  )}
                  {activities.length ? (
                    activities.length > 0 &&
                    activities.map((activity) => {
                      const { id, name, description, duration, count } =
                        activity;
                      return (
                        <>
                          <div className="routine-activities" key={id}>
                            <Card.Text id="routine-activities-name">
                              Name: {name}
                            </Card.Text>
                            <Card.Text id="routine-activities-description">
                              Description: {description}
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
    </>
  );
};

export default SingleRoutine;
