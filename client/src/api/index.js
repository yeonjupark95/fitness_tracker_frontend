import axios from "axios";
const BASE_URL = "https://secret-fjord-65669.herokuapp.com/api/";

export const callApi = async ({ url, method, token, body }) => {
  try {
    const options = {
      method: method ? method.toUpperCase() : "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    if (token) {
      options.headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(BASE_URL + url, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

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
    const routines = await response.json();
    return routines;
  } catch (error) {
    console.error(error);
  }
  // const {response} = await axios.get(`${BASE_URL}/routines`);
  // return response;
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
    const activities = await response.json();
    return activities;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const register = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(response);
    const {
      data: { token, message },
    } = await response.json();
    console.log("token", token, message);
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const createRoutine = async () => {
  try {
    
  } catch (error) {
    console.error;
  }
};
