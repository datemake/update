import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"

//css
import "./review.css";

const styles = {
  card: {
    width: '40vw',
    marginBottom: "15px",
    display: "flex"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: 700
  }
};
function Review(props) {
  const { classes, reviews } = props;
  
  return (
    <div className="review-component">
      {reviews.map((e,i) => {
        return(
          <Card className={classes.card} style={{ backgroundColor: "#white" }} key={i}>
            <CardContent className="review-main-card-content">
              <div className="review-avatar-and-username">
                <Avatar src={e.profile_pic ? e.profile_pic : require('../../photos/user.png')}/>
                <Typography variant="h5" className="write-a-review" style={{ color: "gray" }}>
                  {e.username}
                </Typography>
              </div>
              <div className="review-text">
                <Typography variant="h6" className="write-a-review">
                  {e.review}
                  <br />
                </Typography>
              </div>
            </CardContent>
            <CardActions className="description-card-button" />
          </Card>
        )
      })}
    </div>
  );
}
Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
