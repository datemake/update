import React from "react";
import { Link } from "react-router-dom";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";

//css
import "./form-activity.css";

//other components
import TextfieldFL from "./TextfieldFL";
import ExpansionOneActivity from "./ExpansionOneActivity";
import ExpansionTwoActivity from "./ExpansionTwoActivity";
import FormCheckbox from "./FormCheckbox"

const styles = {
  card: {
    width: 1000,
    minheight: 1145,
    marginTop: 65,
    marginBottom: 65
  },

  title: {
    fontSize: 12
  }
};

function FormMemory(props) {
  const { classes } = props;
  return (
    <div className="main-form-activity-div">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="form-activity-inner-card">
          <CardContent className="activity-card-content">
            <div className="form-activity-title">
              <Typography variant="h3" className="activity-main-question">
             Add a Memory Maker <br />
                <br />
           
              </Typography>
            </div>
            <div  className="memory-instructions">
            <Typography
              variant="h5"
             
              style={{ fontWeight: 200 }}
            >
               Time to get creative and make your thematic date one that won't soon be forgetten. Add a memory maker - that special something that will make your date unique. It could be as simple as finding a photo-booth and making silly faces together. 
             
             <p> Type in the location for your memory maker, or if you don't need to add an address, just give your memory maker a name and check the 'no address' box.</p>
             
   
            

            </Typography>
            </div>
            <div className="form-memory-textfield">
        
              {/* <TextfieldFL placeholder="Search term or establishment name"/> */}
              <Textfield
               id="outlined-bare"
     className={classes.textField}
   //   defaultValue="string"
  //  placeholder={placeholder}
     margin="normal"
     variant="outlined"
     style={{width: 700, height: 30}}
     
            />
            </div>
          <div className="form-checkbox">
            <FormCheckbox label="No address"/>
            </div>
     
            <br />
            <ExpansionOneActivity/>
            <br />
           
              <br />
         
            <div className="form-activity-search-results-div" />
            <Typography
              variant="h5"
              className="activity-text-choose-picture"
              style={{ fontWeight: 200 }}
            >
             Choose a picture to represent your memory maker.
              <br />
              <br />
              {/* <div className="form-activity-search-results-div" /> */}
              <ExpansionTwoActivity/>
              <br />
              <br />
            </Typography>
            {/* <div className="form-activity-search-results-div" /> */}
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
                  Write one descriptive sentence about your memory maker.
              <br />
              <br />
            </Typography>
            <div className="form-activity-textfield">
            <Textfield
               id="outlined-bare"
     className={classes.textField}
   //   defaultValue="string"
  //  placeholder={placeholder}
     margin="normal"
     variant="outlined"
     style={{width: 700, height: 30}}
     
            />
            </div>
            <CardActions className="card-button">
              <Link to={"/create-date-review"} className="form-link">
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
                >
                  Next
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

FormMemory.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormMemory);
