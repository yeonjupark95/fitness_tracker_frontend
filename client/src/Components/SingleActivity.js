const SingleActivity = ({ activities }) => {
  return (
    <div className="activities-wrapper">
      {activities ? (
        activities.length > 0 &&
        activities.map((activity) => {
          const { id, name, description, duration, count } = activity;
          return (
            <>
              <h5>Activities</h5>
              <div className="activities" key={id}>
                <div className="activities-name"> {name} </div>
                <div className="activities-description"> {description} </div>
              </div>
              {duration && (
                <div className="routine-activities-duration">
                  Duration: {duration}
                </div>
              )}
              {count && (
                <div className="routine-activities-count">Count: {count}</div>
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
