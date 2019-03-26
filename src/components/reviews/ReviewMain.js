import React, { useState, useEffect } from "react";

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

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         '/api/profile',
  //       );
  //       console.log(result.data)
  //       setProfile(result.data);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <div className="review-main-component">
      <ReviewForm/>
      <Review />
    </div>
  );
}
ReviewMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewMain);
