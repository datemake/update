import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";

import Header from "../components/header/Header"

const reducer = require("../ducks/reducer")


describe("Tests reducer functions", () => {
 it("should return initial state", () => {
   expect(reducer.updateSearchResults(undefined, {})).toEqual({"payload": undefined, "type": "UPDATE_SEARCH_RESULTS"})
 })
 it("should return memory", () => {
   let memory;
   expect(reducer.inputMemory(memory, {})).toEqual({"payload": memory, "type": "INPUT_MEMORY"})
 })
 it("should return review", () => {
   let review;
   expect(reducer.inputReview(review, {})).toEqual({"payload": review, "type": "INPUT_REVIEW"})
 })
 it("should return food description", () => {
   expect(reducer.inputMemoryDescription("love", {})).toEqual({"payload": "love", "type": "DESCRIBE_MEMORY"})
 })
 it("should return photo info", () => {
  let photo;
   expect(reducer.addMemoryPhotoURL(photo, {})).toEqual({"payload": photo, "type": "ADD_MEMORY_PHOTO_URL"})
 })
})


 
