import axios from "axios";

const initialState = {
  locationData: [],
  date: [],
  dateName: ""
};

const GET_USER_LOCATION = "GET_USER_LOCATION";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER_LOCATION}_FULFILLED`:
      return { ...state, locationData: action.payload.data };

    default:
      return state;
  }
}

export function getUserLocation(location) {
    console.log(location)
  return {
    type: GET_USER_LOCATION,
    payload: axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${location}`)
  };
}