import React from 'react';
import Search from '../Search/Search'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

import './search.css'



class Search extends React.Component {
  state = {
      open: false
  };

  
  render() {
    return (
      <div id='search_div'>
          <TextField placeholder='Enter City'  autoCapitalize='true' margin='none' border='none' variant='filled' style={{backgroundColor: '#ffffff', borderRadius: '0', border: 'none', height: '56px', boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{color: '#757575'}}/>
                </InputAdornment>
              )
            }}
          />

        <Search/>
        <Button variant='contained' color='primary' style={{borderRadius: '0', maxHeight: '56px'}}>Search</Button>
      </div>
    );
  }
}


export default Search;