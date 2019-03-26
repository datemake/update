const reducer = require("../../ducks/reducer");
const axios = require("axios");

describe("Tests reducer functions", () => {
  it("should return initial state", () => {
    expect(reducer.inputMemoryDescription(undefined, {})).toEqual({
      payload: undefined,
      type: "DESCRIBE_MEMORY"
    });
  });

  it("should return initial state", () => {
    let photo;
    expect(reducer.addMemoryPhotoURL(photo, {})).toEqual({
      payload: photo,
      type: "ADD_MEMORY_PHOTO_URL"
    });
  });

  it("should return initial state", () => {
    var place_id = "ChIJRxtoZJqhToYRQnaLBzeSE2g";
    expect(reducer.getSpecificMemory(undefined, {})).toEqual({
      payload: axios.post("/api/getSpecificMemory", { place_id }),
      type: "GET_SPECIFIC_MEMORY_LOCATION"
    });
  });


  it("should return initial state", () => {
    var place_id = "ChIJRxtoZJqhToYRQnaLBzeSE2g";
    expect(reducer.getSpecificFood(undefined, {})).toEqual({
      payload: axios.post("/api/getSpecificFood", { place_id }),
      type: "GET_SPECIFIC_FOOD_LOCATION"
    });
  });

  it("should return initial state", () => {
    expect(reducer.inputFood(undefined, {})).toEqual({
      payload: undefined,
      type: "INPUT_FOOD"
    });
  });

});

