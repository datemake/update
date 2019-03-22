import React from 'react';
import SearchBar from './SearchBar'
import Autocomplete from './Autocomplete'
import Button from '@material-ui/core/Button'


import './search.css'



class Search extends React.Component {
  state = {
      open: false
  };

  
  render() {
    return (
      <div id='search_page'>
        <div id='search_page_dim'>
          <div id='search_div'>
            <Autocomplete/>
            <SearchBar/>
            <Button variant='contained' color='primary' style={{borderRadius: '0', maxHeight: '56px'}}>Search</Button>
          </div>
        </div>
      </div>
      
    );
  }
}


export default Search;