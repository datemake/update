import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReviewMain from "../reviews/ReviewMain";
import { connect } from "react-redux";
import {} from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";

//css
import "../date/date.css";
import hotChocolate from "../../photos/hotChocolate.jpg";

const styles = {
  card: {
    width: "50vw",
    backgroundColor: "#white",
    marginBottom: 125,
    marginTop: 125,
    display: 'flex',
    justifyContent: 'center',
    height: 700
  

  },

  header:{
    display: 'flex',
    justifyContent: 'center'
  },
  media: {
    height: 200,
    width: 200,
    objectFit: "cover",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
 
  
  },
  media2: {
    height: 200,
    width: 200,
  
  }
};

function FormReviewImages(props) {
  const { classes } = props;

  return (
    <div className="form-review-images-card">
      <Card className={classes.card}>
        <CardContent style={{ paddingBottom: 0 }}>
     
          <Typography variant="h4" gutterBottom className={classes.header}>
            {/* {props.activity_description} */}
            activity description here
            {/* <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button> */}
          </Typography>
          <div className="big-image">
          <CardMedia
            className={classes.media}
            // image={props.activity_photo}
            image={hotChocolate}
            title="date activity"
          />
      
        
          {/* <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button>  */}
  </div>
          <div id="bottom_images_div">
            <div>
              <Typography variant="h4" gutterBottom>
                {/* {props.food_description} */}
                food description here
                {/* <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button> */}
              </Typography>
              <CardMedia
                className={classes.media2}
                // image={props.food_photo}
                image={hotChocolate}
                title="date food"
              />
                {/* <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button> */}
            </div>
            <div>
              <Typography variant="h4" gutterBottom>
                {/* {props.date.memory_description} */}
                memory description here
                {/* <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button> */}
              </Typography>
              <CardMedia
                className={classes.media2}
                image={hotChocolate}
                // image={props.memory_photo}
                title="date memory maker"
              />
                {/* <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button> */}
            </div>
          </div>
      <div className="form-revew-button">
          <Button
                size="small"
                  variant="contained"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >Edit</Button> 
                 </div>
        </CardContent>
     
      </Card>
    </div>
  );
}

const mapStateToProps = state => state;

FormReviewImages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(FormReviewImages));
