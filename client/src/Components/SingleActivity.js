const SingleActivity = ({activities}) => {
    console.log("activities from single activities", activities);
    console.log("activitieslength",activities.length)
  return (
    <div className="activities-wrapper">
      <h2>Activities</h2>
      {activities.length ? (
        activities.length > 0 &&
        activities.map((activity) => {
          const { id, name, description } = activity;
          return (
            <>
              <div className="activities" key={id}>
                <div className="activities-name"> {name} </div>
                <div className="activities-description"> {description} </div>
              </div>
            </>
          );
        })
      ) : (
        <h5> There are no Activities to display! </h5>
      )}
    </div>
  );
};

export default SingleActivity;