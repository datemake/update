import axios from "axios";
const cors = require("cors");

const initialState = {
  locationData: [],
  location: "",
  date: [],
  dateName: "",
  inputDescription:"",

  //activities
  inputActivity: "",
  allMatchingActivityLocations: [],
  specificActivity: [],
  describeActivity: "",
  activityPhotoURL: [],

  //food
  inputFood: "",
  allMatchingFoodLocations: [],
  specificFood: [],
  describeFood: "",
  foodPhotoURL: [],

  //memory maker
  inputMemory: "",
  allMatchingMemoryLocations: [],
  specificMemory: [],
  describeMemory: "",
  memoryPhotoURL: [],

  //search results
  searchResults: [],

  //review page
  reviewInput: ""
};


//search results
const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS"

//general date constants
const INPUT_DATE_NAME = "INPUT_DATE_NAME";
const INPUT_DATE_DESCRIPTION = "INPUT_DATE_DESCRIPTION";

//location constants
const INPUT_LOCATION = "INPUT_LOCATION";
const GET_USER_LOCATION = "GET_USER_LOCATION";

// user activities constants
const INPUT_ACTIVITY = "INPUT_ACTIVITY";
const GET_MATCHING_ACTIVITY_LOCATIONS = "GET_MATCHING_ACTIVITY_LOCATIONS";
const GET_SPECIFIC_ACTIVITY_LOCATION = "GET_SPECIFIC_ACTIVITY_LOCATION";
const DESCRIBE_ACTIVITY = "DESCRIBE_ACTIVITY";
const ADD_ACTIVITY_PHOTO_URL = "ADD_ACTIVITY_PHOTO_URL";

//food constants
const INPUT_FOOD = "INPUT_FOOD";
const GET_MATCHING_FOOD_LOCATIONS = "GET_MATCHING_FOOD_LOCATIONS";
const GET_SPECIFIC_FOOD_LOCATION = "GET_SPECIFIC_FOOD_LOCATION";
const DESCRIBE_FOOD = "DESCRIBE_FOOD";
const ADD_FOOD_PHOTO_URL = "ADD_FOOD_PHOTO_URL";

//memory locations
const INPUT_MEMORY = "INPUT_MEMORY";
const GET_MATCHING_MEMORY_LOCATIONS = "GET_MATCHING_MEMORY_LOCATIONS";
const GET_SPECIFIC_MEMORY_LOCATION = "GET_SPECIFIC_MEMORY_LOCATION";
const DESCRIBE_MEMORY = "DESCRIBE_MEMORY";
const ADD_MEMORY_PHOTO_URL = "ADD_MEMORY_PHOTO_URL";

//review page
const INPUT_REVIEW = 'INPUT_REVIEW'



export default function reducer(state = initialState, action) {

  switch (action.type) {

    case UPDATE_SEARCH_RESULTS:
    return {...state, searchResults: action.payload}

    case INPUT_DATE_DESCRIPTION:
    console.log(action.type);
    return { ...state, inputDescription: action.payload };

    case INPUT_DATE_NAME:
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
      console.log(action.payload.data.results);
      return {
        ...state,
        allMatchingActivityLocations: action.payload.data.results
      };
    case `${GET_SPECIFIC_ACTIVITY_LOCATION}_FULFILLED`:
      return {
        ...state,
        specificActivity: action.payload.data
      };

    case DESCRIBE_ACTIVITY:
      return { ...state, describeActivity: action.payload };

    case ADD_ACTIVITY_PHOTO_URL:
      return { ...state, activityPhotoURL: action.payload };

    //food cases
    case INPUT_FOOD:
      return { ...state, inputFood: action.payload };

    case `${GET_MATCHING_FOOD_LOCATIONS}_FULFILLED`:
      return {
        ...state,
        allMatchingFoodLocations: action.payload.data.results
      };

    case `${GET_SPECIFIC_FOOD_LOCATION}_FULFILLED`:
      return {
        ...state,
        specificFood: action.payload.data
      };
    case DESCRIBE_FOOD:
      return { ...state, describeFood: action.payload };

    case ADD_FOOD_PHOTO_URL:
      return { ...state, foodPhotoURL: action.payload };

    //memory cases
    case INPUT_MEMORY:
      return { ...state, inputMemory: action.payload };

    case `${GET_MATCHING_MEMORY_LOCATIONS}_FULFILLED`:
      return {
        ...state,
        allMatchingMemoryLocations: action.payload.data.results
      };

    case `${GET_SPECIFIC_MEMORY_LOCATION}_FULFILLED`:
    console.log(action.payload.data)  
    return {
        ...state,
        specificMemory: action.payload.data
        
      };

    case DESCRIBE_MEMORY:
    console.log(state.specificMemory)
      return { ...state, describeMemory: action.payload };

    case ADD_MEMORY_PHOTO_URL:
      return { ...state, memoryPhotoURL: action.payload };
      case INPUT_REVIEW:
      console.log(action.type);
      return { ...state, reviewInput: action.payload };

    default:
      return state;
  }
}
//search results
export const updateSearchResults = dates => {
  return {
    type: UPDATE_SEARCH_RESULTS,
    payload: dates
  }
}

//general date 
export const inputDateName = name => {
  console.log(name);
  return {
    type: INPUT_DATE_NAME,
    payload: name
  };
};

export const inputDateDescription = description => {
  console.log(description);
  return {
    type: INPUT_DATE_DESCRIPTION,
    payload: description
  };
};


//FORM - LOCATION PAGE FUNCTIONS/////////////////////////////////////////////////////////////////////////////////

//initial get location: puts location in dataLocation (array) in state
export function getUserLocation(location) {
  console.log(location);
  return {
    type: GET_USER_LOCATION,
    payload: axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${
        process.env.REACT_APP_GOOGLE
      }&address=${location}`
    )
  };
}

//holds in state the input (what user types as their location) in the location part of the form
export const inputLocation = location => {
  console.log(location);
  return {
    type: INPUT_LOCATION,
    payload: location
  };
};

// FORM - ACTIVITY PAGE FUNCTIONS///////////////////////////////////////////////////////////////////////////////

//holds in state the input (what user types as their activity) in the activity part of the form
export const inputActivity = activity => {
  console.log(activity);
  return {
    type: INPUT_ACTIVITY,
    payload: activity
  };
};

//gets a list of establishments based on the 'activity' entered in the inputActivity and the location which was saved in dataLocation. Triggered by "see results" button in expansion form one on activity page
export function getMatchingActivities(activity, location) {
  console.log(activity, location);
  return {
    type: GET_MATCHING_ACTIVITY_LOCATIONS,
    payload: axios.post(
      `/api/getMatchingActivites?location=${location}&activity=${activity}`
    )
  };
}

//gets a list of photo-reference ids by sending the place_id to google of the selected place. We use the photo-reference ids on the activity page (expansion form two) to display all the photos of the chosen place
export function getSpecificActivity(place_id) {
  console.log(place_id);
  return {
    type: GET_SPECIFIC_ACTIVITY_LOCATION,
    payload: axios.post("/api/getSpecificActivity", { place_id })
  };
}

//This grabs the photo url when the user checks a checkbox next to the photo. The photoURL will hang out in state until we post it to the database with the create date post
export function addActivityPhotoURL(photo) {
  return {
    type: ADD_ACTIVITY_PHOTO_URL,
    payload: photo
  };
}

//holds in state the input (what user types) in the activity descriptive sentence part of the form (the last input on the page)
export const inputActivityDescription = activityDescription => {
  console.log(activityDescription);
  return {
    type: DESCRIBE_ACTIVITY,
    payload: activityDescription
  };
};

// FORM - FOOD PAGE FUNCTIONS///////////////////////////////////////////////////////////////////////////////

export const inputFood = food => {
  console.log(food);
  return {
    type: INPUT_FOOD,
    payload: food
  };
};

export function getMatchingFood(food, location) {
  console.log(food, location);
  return {
    type: GET_MATCHING_FOOD_LOCATIONS,
    payload: axios.post(
      "/api/getMatchingFood",
      { location, food }
      // `/api/getMatchingFood?location=${location}&activity=${food}`
    )
  };
}

export function getSpecificFood(place_id) {
  console.log(place_id);
  return {
    type: GET_SPECIFIC_FOOD_LOCATION,
    payload: axios.post("/api/getSpecificFood", { place_id })
  };
}

export function addFoodPhotoURL(photo) {
  console.log(photo);
  return {
    type: ADD_FOOD_PHOTO_URL,
    payload: photo
  };
}


export const inputFoodDescription = foodDescription => {
  console.log(foodDescription);
  return {
    type: DESCRIBE_FOOD,
    payload: foodDescription
  };
};

// FORM - MEMORY MAKER PAGE FUNCTIONS///////////////////////////////////////////////////////////////////////////////

export const inputMemory = memory => {
  console.log(memory);
  return {
    type: INPUT_MEMORY,
    payload: memory
  };
};

export function getMatchingMemories(memory, location) {
  console.log(memory, location);
  return {
    type: GET_MATCHING_MEMORY_LOCATIONS,
    payload: axios.post("/api/getMatchingMemory", { memory, location })
  };
}

export function getSpecificMemory(place_id) {
  console.log(place_id);
  return {
    type: GET_SPECIFIC_MEMORY_LOCATION,
    payload: axios.post("/api/getSpecificMemory", { place_id })
  };
}

export function addMemoryPhotoURL(photo) {
  console.log(photo);
  return {
    type: ADD_MEMORY_PHOTO_URL,
    payload: photo
  };
}

export const inputMemoryDescription = memoryDescription => {
  console.log(memoryDescription);
  return {
    type: DESCRIBE_MEMORY,
    payload: memoryDescription
  };
};

//review page
export const inputReview = review => {
  console.log(review);
  return {
    type: INPUT_REVIEW,
    payload: review
  };
};
///FORM FINAL POST TO DATABASE

// export const createDate = dateName => {
//   console.log(dateName);
//   return {
//     type: DESCRIBE_MEMORY,
//     payload: axios.post("/api/createDate", { dateName })
//   };
// };
