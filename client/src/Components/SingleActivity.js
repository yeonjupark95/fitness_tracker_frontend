const SingleActivity = (activities) => {
  return (
    <div className="activities-wrapper">
      <h2>Activities</h2>
      {activities.length ? (
        activities.length > 0 &&
        activities.map(({ id, name, description }) => {
          return (
            <div className="activities" key={id}>
              <div className="activities-name"> {name} </div>
              <div className="activities-description"> {description} </div>
            </div>
          );
        })
      ) : (
        <h5> There are no Activities to display! </h5>
      )}
    </div>
  );
};

export default SingleActivity;
