const reducer = require('../../ducks/reducer')
import axios from "axios";


describe('Tests reducer functions', () => {
  it('should return initial state', () => {
    expect(reducer.updateSearchResults('test', {})).toEqual({"payload": 'test', "type": "UPDATE_SEARCH_RESULTS"})
  })
  it('should return initial state', () => {
    expect(reducer.inputDateName('test', {})).toEqual({"payload": 'test', "type": "INPUT_DATE_NAME"})
  })
  it('should return initial state', () => {
    expect(reducer.inputDateDescription('test', {})).toEqual({"payload": 'test', "type": "INPUT_DATE_DESCRIPTION"})
  })
  it('should return initial state', () => {
    expect(reducer.inputLocation('test', {})).toEqual({"payload": 'test', "type": "INPUT_LOCATION"})
  })
  it('should return initial state', () => {
    var location = '30.374932, -97.787474'
    expect(reducer.getUserLocation(location, {})).toEqual({"payload": axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE}&address=${location}`), "type": "GET_USER_LOCATION"})
  })
})
