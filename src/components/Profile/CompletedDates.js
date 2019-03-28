import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//css
import "./Profile.css"

import ExpansionCompletedDates from "./ExpansionCompletedDates"

const styles = {
    card: {
      width: 1200,
      // height: 275,
      marginTop: 45,
      marginBottom: 65
    },
  
    title: {
      fontSize: 12
    },

  };
  
function CompletedDates(props) {
    const { classes } = props;
    console.log(props)
    
      const [savedDates,setSavedDates] = useState([])
  
      // useEffect(() => {
      //   const fetchData = async () => {
      //     const result = await axios(
      //       '/api/completedDates',
      //     );
      //     console.log(result.data)
      //     setSavedDates(result.data);
      //   };
    
      //   fetchData();
      // }, []);

       const completed = savedDates.map(date => {
         return <div key={date.id}>
                    {/* <h2>{date.username}</h2>
                    <h2>{date.profile_pic}</h2>
                    <h2>{date.username}</h2> */}
                 </div>
       })
return(


      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="profile-completed-dates-card">
          <CardContent className="profile-completed-card-content">
          <Typography className="saved-dates"
              variant="h3"
              color= 'primary'
              style={{ fontWeight: 600 }}
            >
              Completed Dates
             
            </Typography>
            <ExpansionCompletedDates completedDates={props.completedDates}/>
              {/* {completed} */}
          </CardContent>
        </div>
      </Card>
    
  
)
}

CompletedDates.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(CompletedDates);