import React from 'react'
import {Link} from 'react-router-dom'

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

//css
import "./form.css"

//other components
import TextfieldFL from './TextfieldFL';

const styles = {
    card: {
      width: 1000,
      height: 655,
      marginTop: 65,
      marginBottom: 65
      
    },
   
    title: {
      fontSize: 12
    },
  
  };

function FormLanding(props) {
    const { classes } = props;

    return (
        <div className="main-form-div">
      <Card className={classes.card} style={{backgroundColor:'#white'}}>
      <div className="form-inner-card">
        <CardContent className="card-content">
          
        
          <Typography variant="h3"  paragraph='true' className="main-question" >
Create a Date!            <br /><br />
          </Typography>
          <Typography variant="h4"  paragraph='true' className="main-question" style={{fontWeight:200}}>
            What would you like to call your date? Give it an eyecatching name.
            <br /><br />
          </Typography>
          <TextfieldFL/>
        </CardContent>
        <CardActions className="card-button">
        
         <Link to={"/create-date-activity"} className="form-link"><Button size="small" variant="raised" color="primary" style={{color: 'white', fontWeight: 600, fontSize: 16}} >Next</Button></Link> 
        </CardActions>
       </div>
      </Card>
      </div>
    );
  }
  
  FormLanding.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(FormLanding);