import React, { useState, useEffect } from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'
import Autocomplete from './Autocomplete'
import Results from './Results'
import Button from '@material-ui/core/Button'

import { updateSearchResults } from "../../ducks/reducer";
import { connect } from "react-redux";

import './search.css'

function Search(props){
  const [test, setTest] = useState('Howdy');

  const [inputValue, setInputValue] = useState('')
  const [selectedItem, setSelectedItem] = useState('')
  const [location, setLocation] = useState({lat: '', lng: ''})
  const [within, setWithin] = useState(25)
  const [dates, setDates] = useState([])
  const [tags, setTags] = useState([])

  useEffect(() => {
    axios
      .get('/api/tags')
      .then(response => {
        console.log(response.data)
        const results = []
        let first = response.data.map(e => {
          let second = e.tags.map(item => {
            results.push(item)
          })
        })
        var unique = results.filter( onlyUnique )
        setTags(unique)
      })
  }, [])

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

  function handleClick(){
    const search = {
      location: location,
      within: within,
      tags: selectedItem
    }
    axios
      .post('/api/getDates', search)
      .then(response => {
        // setDates(response.data)
        props.updateSearchResults(response.data)
      })
  }

  // const TestContext = React.createContext(null);
  console.log(selectedItem)
  console.log(tags)
  return (
       <div id='search_page'>
        <div id='search_page_dim'>
          <div id='search_div'>
            <Autocomplete
              location = {location}
              setLocation = {setLocation}
            />
            <SearchBar
              inputValue = {inputValue}
              setInputValue = {setInputValue}
              selectedItem = {selectedItem}
              setSelectedItem = {setSelectedItem}
              within = {within}
              setWithin = {setWithin}
              tags = {tags}
            />
            <Button variant='contained' color='primary' style={{borderRadius: '0', height: '56px'}} onClick={handleClick}>Search</Button>
          </div>
          {/* <TestContext.Provider value={'test'}> */}
            <Results 
              // dates={dates}
            />
          {/* </TestContext.Provider> */}
        </div>
        {/* <TestContext.Provider value={'test'}> */}
        {/* <Results dates={dates} /> */}
        {/* </TestContext.Provider> */}
      </div>
  );
}
const mapStateToProps = state => {
  return {
    dates: state.searchResults
  };
}

export default connect(mapStateToProps, {updateSearchResults})(Search)

// export default Search;
