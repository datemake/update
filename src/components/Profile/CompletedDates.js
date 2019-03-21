import React, {useState} from "react";
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

const styles = {
    card: {
      width: 1200,
      height: 275,
      marginTop: 45,
      marginBottom: 65
    },
  
    title: {
      fontSize: 12
    },

  };
  
function CompletedDates(props) {
    const { classes } = props;
    



return(


      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="profile-user-card">
          <CardContent className="profile-user-card-content">
     
         
           
          </CardContent>
        </div>
      </Card>
    
  
)
}
CompletedDates.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(CompletedDates);