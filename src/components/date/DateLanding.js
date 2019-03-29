import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//components
import DateDescription from "./DateDescription"
import DateImages from "./DateImages"
//css
import "./date.css"


const styles = {
    card: {
      width: 1000,
      height: 575,
      marginTop: 65,
      marginBottom: 65
    },
  
    title: {
      fontSize: 12
    }
  };
  

function DateLanding(props) {
  const { classes } = props;
  // console.log(props)
  const [date,setDate] = useState([])

  useEffect(() => {
    axios
      .get(`/api/dates/${props.match.params.dateId}`)
      .then(response => {
        // console.log(response.data)
        setDate(response.data)
    })
  }, [props.match.params.dateId])

  console.log(date)

return(
    
    <div className="main-date-div">
      <div id='date_landing_dim'>
        <DateDescription date={date}/>
        <DateImages date={date}/>
      </div>
    </div>

)
}
DateLanding.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(DateLanding);