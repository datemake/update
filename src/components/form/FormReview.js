import React, { useState, useEffect }  from 'react'
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
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//components
import FormReviewDescription from "./FormReviewDescription"
import FormReviewImages from "./FormReviewImages"

//css
import "./form-review.css"


const styles = {
card: {
width: 1000,

},
  
    title: {
      fontSize: 12
    },
    textField: {
      width: 500
    },
  };
  

 function FormReview(props) {
  
    const { classes } = props;


    console.log(props.inputDescription)
  
    const createDate = (
      activity_name,
      activity_photo,
      activity_google_place_id,
      activity_description,
      food_name,
      food_photo,
      food_google_place_id,
      food_description,
      memory_name,
      memory_photo,
      memory_google_place_id,
      memory_description,
      date_name,
      lat_lng,
      date_description
    ) => {
     
      axios
        .post("/api/createDateActivity", { activity_name, activity_photo, activity_google_place_id, activity_description })
        .then(() =>
          axios.post("/api/createDateFood", { food_name, food_photo, food_google_place_id, food_description })
        )
        .then(() =>
          axios.post("/api/createDateMemory", {
            memory_name,
            memory_photo,
            memory_google_place_id,
            memory_description
          })
        )
        .then(() => axios.post("/api/createDate", { date_name,  lat_lng, date_description }));
    };



    return (
        <div className="main-form-review-div">
        <div className="form-review-div">
        <Card className={classes.card}>
            <CardContent>
            <Typography
            variant="h3"
            gutterBottom
            style={{ textDecoration: "underline", textAlign: "center" }}
          >Submit Your Date
            {/* {props.date_name} */}
          </Typography>
          <div className="Review-instructions">
          <Typography
              variant="h5"
              style={{ width: "80%", marginTop: "5px", fontWeight: "400" }}
            >
            Review everything you wrote. If you would like to edit anything, this is your final chance to do so. Then submit your date to be posted as a date for other users to explore.
            <br/>
           <br/>
           If you feel that everything looks good, click the submit button and you will create a date!

  
            </Typography>
            
            </div>
            <div className= "form-review-submit-button-div">
            <Button
             onClick={
                    ()=>
                    createDate(
                    
                      props.specificActivity.result.name,
                      props.activityPhotoURL,
                      props.specificActivity.result.place_id,
                      props.describeActivity,
                      props.specificFood.result.name,
                      props.foodPhotoURL,
                      props.specificFood.result.place_id,
                      props.describeFood,
                      props.specificMemory.result.name,
                      props.memoryPhotoURL,
                      props.specificMemory.result.place_id,
                      props.describeMemory,
                      props.dateName,
                      props.locationData.results[0].geometry.location,
                      props.inputDescription
                    )
                  }
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Submit</Button>
              </div>
            </CardContent>
        </Card>
        </div>
        <div className="form-review-date-div">
         <FormReviewDescription/>
         <FormReviewImages/>
         </div>
   
        </div>
    )
}

const mapStateToProps = state => state;

FormReview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { inputDateDescription}
  )(FormReview)
);