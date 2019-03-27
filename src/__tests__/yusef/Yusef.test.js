import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

import Header from "../components/header/Header"

const reducer = require("../ducks/reducer")


describe("Tests reducer functions", () => {
 it("should return initial state", () => {
   expect(reducer.inputActivity(undefined, {})).toEqual({"payload": undefined, "type": "INPUT_ACTIVITY"})
 })
 it("should return memory", () => {
   let memory;
   expect(reducer.inputMemory(memory, {})).toEqual({"payload": memory, "type": "INPUT_MEMORY"})
 })
 it("should return review", () => {
   let review;
   expect(reducer.inputActivityDescription('activity', {})).toEqual({"payload": 'activity', "type": "DESCRIBE_ACTIVITY"})
 })
 it("should return food description", () => {
   expect(reducer.inputFoodDescription("love", {})).toEqual({"payload": "love", "type": "DESCRIBE_FOOD"})
 })
 it("should return photo info", () => {
  let photo;
   expect(reducer.addFoodPhotoURL(photo, {})).toEqual({"payload": photo, "type": "ADD_FOOD_PHOTO_URL"})
 })
})


 
