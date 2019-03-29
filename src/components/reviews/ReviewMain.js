import React, { useState, useEffect } from "react";
import axios from 'axios'

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

//components
import Review from "./Review"
import ReviewForm from "./ReviewForm"
//css
import "./review.css";

const styles = {

};
function ReviewMain(props) {

  const { classes } = props;

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    if(props.date_id){
      getReviews()
    }
  }, [props.date_id])

  function getReviews(){
    axios
      .get(`/api/reviews/${props.date_id}`)
      .then(response => {
        setReviews(response.data)
      })
  }

  return (
    <div className="review-main-component">
      <ReviewForm getReviews={getReviews} date_id={props.date_id} setReviews={setReviews}/>
      <Review reviews={reviews}/>
    </div>
  );
}
ReviewMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewMain);
