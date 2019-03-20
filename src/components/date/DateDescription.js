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
import "./date.css"


const styles = {
    card: {
      width: 700,
      height: 775,
      marginTop: 95,
      marginBottom: 65
    },
  
    title: {
      fontSize: 12
    },
 
    
  };
  

function DateDescription(props) {
    const { classes } = props;
    



return(

 <div >
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="date-inner-card">
          <CardContent className="date-card-content">
     
         hhh
           
          </CardContent>
        </div>
      </Card>
    
    </div>
)
}
DateDescription.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(DateDescription);