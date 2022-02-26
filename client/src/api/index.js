const BASE_URL = "https://secret-fjord-65669.herokuapp.com/api";

export const fetchRoutines = async (token) => {
  try {
    let response;
    if (token) {
      response = await fetch(`${BASE_URL}/routines`, {
        headers: {
          "Content-Type": "applicaton/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      response = await fetch(`${BASE_URL}/routines`);
    }
    const {
      data: { routines },
    } = await response.json();
    return routines;
  } catch (error) {
    console.error(error);
  }
};

export const fetchActivities = async (token) => {
  try {
    let response;
    if (token) {
      response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          "Content-Type": "applicaton/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      response = await fetch(`${BASE_URL}/activities`);
    }
    const {
      data: { activities },
    } = await response.json();
    return activities;
  } catch (error) {
    console.error(error);
  }
};
