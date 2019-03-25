import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//redux
import { connect } from "react-redux";
import { inputDateDescription } from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

//css
import "./form.css";
import "./form-description.css";

//other components

const styles = {
  card: {
    width: 1000,

    minheight: 1245,
    marginTop: 55,
    marginBottom: 55
  },

  title: {
    fontSize: 12
  },
  textField: {
    width: 700
  },
};




function FormLanding(props) {
  const { classes } = props;

  console.log(props.inputDescription)
  
  const createDate = (
    activity_description,
    activity_photo,
    activity_google_place_id,
    food_description,
    food_photo,
    food_google_place_id,
    memory_description,
    memory_photo,
    memory_google_place_id,
    date_name,
    lat_lng,
    date_description
  ) => {
   
    axios
      .post("/api/createDateActivity", { activity_description, activity_photo, activity_google_place_id })
      .then(() =>
        axios.post("/api/createDateFood", { food_description, food_photo, food_google_place_id })
      )
      .then(() =>
        axios.post("/api/createDateMemory", {
          memory_description,
          memory_photo,
          memory_google_place_id
        })
      )
      .then(() => axios.post("/api/createDate", { date_name,  lat_lng, date_description }));
  };
  

  return (
    <div className="main-form-description-div">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="form-inner-card">
          <CardContent className="form-description-card-content">
            <Typography variant="h3" className="main-question">
              Describe Your Date <br />
              <br />
            </Typography>
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
              Your date description will help others to understand how they can
              experience the date you created in the way that you imagine. Give
              them tips, descriptive details, and instructions. 
              <br />
              <br/>
            </Typography>

            <TextField
              id="filled-multiline-flexible"
              label="Write your description"
              multiline
              rowsMax="15"
              value={props.dateDescription}
              onChange={(e) => props.inputDateDescription(e.target.value)}
              className={classes.textField}
              margin="normal"
              style={{ backgroundColor: "white" }}
              variant="filled"
            />

            {/* <Textfield
              id="outlined-bare"
              className={classes.textField}
              //   defaultValue="string"
              //  placeholder={placeholder}
              //               value={name}
              margin="normal"
              variant="outlined"
              style={{ width: 700, height: 30 }}
              onChange={(e) => props.inputDateName(e.target.value)}
            /> */}

    
          </CardContent>
          <CardActions className="description-card-button">
            <Link to={"/create-date-review"} className="form-link">
           
                <Button
                  onClick={
                    ()=>
                    createDate(
                    
                      props.specificActivity.result.name,
                      props.activityPhotoURL,
                      props.specificActivity.result.place_id,
                      props.specificFood.result.name,
                      props.foodPhotoURL,
                      props.specificFood.result.place_id,
                      props.specificMemory.result.name,
                      props.memoryPhotoURL,
                      props.specificMemory.result.place_id,
                      props.dateName,
                      props.locationData.results[0].geometry.location,
                      props.inputDescription
                    )
                  }
                  size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
                >
              Next
                </Button>
          
            </Link>
          </CardActions>
          
        </div>
      </Card>
    </div>
  );
}
const mapStateToProps = state => state;

FormLanding.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { inputDateDescription}
  )(FormLanding)
);
