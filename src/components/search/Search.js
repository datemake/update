import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Autocomplete from "./Autocomplete";
import Results from "./Results";
import Button from "@material-ui/core/Button";

import "./search.css";

function Search() {
  const [test, setTest] = useState("Howdy");

  const [inputValue, setInputValue] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [within, setWithin] = useState(25);
  const [dates, setDates] = useState([]);

  function handleClick() {
    const search = {
      location: location,
      within: within,
      tags: selectedItem
    };
    axios.post("/api/getDates", search).then(response => {
      setDates(response.data);
    });
  }

  // const TestContext = React.createContext(null);
  // console.log(selectedItem)
  return (
    <div id="search_page">
      <div id="search_page_dim">
        <div id="search_div">
          <Autocomplete location={location} setLocation={setLocation} />
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            within={within}
            setWithin={setWithin}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ borderRadius: "0", maxHeight: "56px" }}
            onClick={handleClick}
          >
            Search
          </Button>
        </div>
        {/* <TestContext.Provider value={'test'}> */}
        <Results dates={dates} />
        {/* </TestContext.Provider> */}
      </div>
    </div>
  );
}

export default Search;
