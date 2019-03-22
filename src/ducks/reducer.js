import axios from "axios";
const cors = require("cors")



const initialState = {
  locationData: [],
  location:"",
  date: [],
  dateName: "",

  //activities
  inputActivity: "",
  allMatchingActivityLocations: [],
  specificActivity: [],
  describeActivity: "",
  activityPhotoReference: [],

  //food
  inputFood: "",
  allMatchingFoodLocations: [],
  specificFood: [],
  describeFood: "",
  foodPhotoReference: [],

  //memory maker
  inputMemory: "",
  allMatchingMemoryLocations: [],
  specificMemory: [],
  describeMemory: "",
  memoryPhotoReference: []
};
const INPUT_LOCATION = "INPUT_LOCATION"
const GET_USER_LOCATION = "GET_USER_LOCATION";
const GET_DATE_NAME = "GET_DATE_NAME";

// user activities constants
const INPUT_ACTIVITY = "INPUT_ACTIVITY";
const GET_MATCHING_ACTIVITY_LOCATIONS = "GET_MATCHING_ACTIVITY_LOCATIONS";
const GET_SPECIFIC_ACTIVITY_LOCATION = "GET_SPECIFIC_ACTIVITY_LOCATION";
const DESCRIBE_ACTIVITY = "DESCRIBE_ACTIVITY";
const ACTIVITY_PHOTO_REFERENCE_ID = "ACTIVITY_PHOTO_REFERENCE_ID";

//food constants
const INPUT_FOOD = "INPUT_FOOD";
const GET_MATCHING_FOOD_LOCATIONS = "GET_MATCHING_FOOD_LOCATIONS";
const GET_SPECIFIC_FOOD_LOCATION = "GET_SPECIFIC_FOOD_LOCATION";
const DESCRIBE_FOOD = "DESCRIBE_FOOD";
const FOOD_PHOTO_REFERENCE_ID = "FOOD_PHOTO_REFERENCE_ID";

//memory locations
const INPUT_MEMORY = "INPUT_MEMORY";
const GET_MATCHING_MEMORY_LOCATIONS = "GET_MATCHING_MEMORY_LOCATIONS";
const GET_SPECIFIC_MEMORY_LOCATION = "GET_SPECIFIC_MEMORY_LOCATION";
const DESCRIBE_MEMORY = "DESCRIBE_MEMORY";
const MEMORY_PHOTO_REFERENCE_ID = "MEMORY_PHOTO_REFERENCE_ID";

export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case GET_DATE_NAME:
      console.log(action.type);
      return { ...state, dateName: action.payload };
      case INPUT_LOCATION:
      console.log(action.type);
      return { ...state, location: action.payload };

    case `${GET_USER_LOCATION}_FULFILLED`:
      return { ...state, locationData: action.payload.data };




    //activity cases
    case INPUT_ACTIVITY:
      return { ...state, inputActivity: action.payload };

    case `${GET_MATCHING_ACTIVITY_LOCATIONS}_FULFILLED`:
    console.log(action.payload.data)
      return {
        ...state,
        allMatchingActivityLocations: action.payload.data
      };
    case `${GET_SPECIFIC_ACTIVITY_LOCATION}_FULFILLED`:
      return {
        ...state,
        specificActivity: action.payload.data
      };

    case DESCRIBE_ACTIVITY:
      return { ...state, describeActivity: action.payload };

    //food cases
    case INPUT_FOOD:
      return { ...state, inputFood: action.payload };

    case `${GET_MATCHING_FOOD_LOCATIONS}_FULFILLED`:
      return {
        ...state,
        allMatchingFoodLocations: action.payload.data
      };

    case `${GET_SPECIFIC_FOOD_LOCATION}_FULFILLED`:
      return {
        ...state,
        specificFood: action.payload.data
      };
    case DESCRIBE_FOOD:
      return { ...state, describeFood: action.payload };
    //memory cases
    case INPUT_MEMORY:
      return { ...state, inputMemory: action.payload };
    case `${GET_MATCHING_MEMORY_LOCATIONS}_FULFILLED`:
      return {
        ...state,
        allMatchingMemoryLocations: action.payload.data
      };
    case `${GET_SPECIFIC_MEMORY_LOCATION}_FULFILLED`:
      return {
        ...state,
        specificMemory: action.payload.data
      };
    case DESCRIBE_MEMORY:
      return { ...state, describeMemory: action.payload };
    default:
      return state;
  }
}
//general date name
export const getDateName = date => {
  console.log(date);
  return {
    type: GET_DATE_NAME,
    payload: date
  };
};
//initial get location
export function getUserLocation(location) {
  console.log(location)
  return {
    type: GET_USER_LOCATION,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${location}`
    )
  };
}

export const inputLocation = location => {
  console.log(location);
  return {
    type: INPUT_LOCATION,
    payload: location
  };
};

//activity functions
export const inputActivity = activity => {
  console.log(activity);
  return {
    type: INPUT_ACTIVITY,
    payload: activity
  };
};

export function getMatchingActivities(activity, location) {
  console.log(activity, location);
  return {
    type: GET_MATCHING_ACTIVITY_LOCATIONS,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${
        process.env.REACT_APP_GOOGLE
      }&query=${activity}&location=${location}&radius=10000`,
      {headers: {
        "Access-Control-Allow-Origin": "*"

      }}
    )
  };
}

export function getSpecificActivity(specific) {
  console.log(specific);
  return {
    type: GET_SPECIFIC_ACTIVITY_LOCATION,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${specific}`
    )
  };
}
export function activityPhotoReference(photo) {
  console.log(photo);
  return {
    type: ACTIVITY_PHOTO_REFERENCE_ID,
    payload: axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${photo}`
    )
  };
}

export const inputActivityDescription = activityDescription => {
  console.log(activityDescription);
  return {
    type: DESCRIBE_ACTIVITY,
    payload: activityDescription
  };
};

//food functions
export const inputFood = food => {
  console.log(food);
  return {
    type: INPUT_FOOD,
    payload: food
  };
};

export function getMatchingFood(matchFood) {
  console.log(matchFood);
  return {
    type: GET_MATCHING_FOOD_LOCATIONS,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${matchFood}`
    )
  };
}
export function getSpecificFood(specificFood) {
  console.log(specificFood);
  return {
    type: GET_SPECIFIC_FOOD_LOCATION,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${specificFood}`
    )
  };
}
export function foodPhotoReference(photo) {
  console.log(photo);
  return {
    type: FOOD_PHOTO_REFERENCE_ID,
    payload: axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${photo}`
    )
  };
}
export const inputFoodDescription = foodDescription => {
  console.log(foodDescription);
  return {
    type: DESCRIBE_FOOD,
    payload: foodDescription
  };
};

//memory functions
export const inputMemory = memory => {
  console.log(memory);
  return {
    type: INPUT_MEMORY,
    payload: memory
  };
};

export function getMatchingMemories(matchFood) {
  console.log(matchFood);
  return {
    type: GET_MATCHING_MEMORY_LOCATIONS,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${matchFood}`
    )
  };
}
export function getSpecificMemory(specificMemory) {
  console.log(specificMemory);
  return {
    type: GET_SPECIFIC_MEMORY_LOCATION,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${specificMemory}`
    )
  };
}
export function memoryPhotoReference(photo) {
  console.log(photo);
  return {
    type: MEMORY_PHOTO_REFERENCE_ID,
    payload: axios.post(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${photo}`
    )
  };
}
export const inputMemoryDescription = memoryDescription => {
  console.log(memoryDescription);
  return {
    type: DESCRIBE_MEMORY,
    payload: memoryDescription
  };
};
