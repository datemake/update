import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Rating from "react-rating";
import Loader from 'react-loader-spinner'

import AddImage from "./AddImage";
import outlineHeart from "../../photos/outline-heart.png";
import fullHeart from "../../photos/full-heart.png";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import firebase from "firebase/app";

//components

//css
import "./review.css";

const styles = {
  card: {
    width: "40vw",
    // marginBottom: "150px",
    // marginTop: "150px",
    display: "flex",

    justifyContent: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    // fontSize: 14,
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: '39vw',
    marginLeft: '.5vw'
  }
};
function ReviewForm(props) {
  function handleRatingChange(rating) {
    // console.log("rating", rating);
    setRating(rating);
  }

  const { classes, getReviews, setReviews } = props;
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
  const [myUser, setMyUser] = useState("");
  const [review, setReview] = useState("");
  // const [exif, setExif] = useState("");
  // const [url, setUrl] = useState("");
  const [images, setImages] = useState([])
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    checkUser();
  }, []);
  function checkUser() {
    firebase.auth().onAuthStateChanged(function(user) {
      setMyUser(user);
    });
  }
  const leaveReview = () => {
    const data = {
      userFid: myUser.uid,
      review: review,
      images: images,
      dateId: props.date_id,
      rating: rating
    };
    axios.post("/api/reviews", data).then(response => {
      // console.log(response);
      setReviews(response.data);
      setReview("");
    });
    axios.post("/api/completedDates", data).then(response => {
      // console.log(response.data)
    });
  };

  console.log(images)
  return (
    <div className="review-form-component">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        {myUser ? (
          <CardContent className="profile-main-card-content">
              <div id='review_div_rating'>
                <Typography
                  variant="h2"
                  className="write-a-review"
                  color="primary"
                  style={{ fontSize: 36 }}
                >
                  Leave a Review            
                </Typography>
                <Rating
                  onClick={handleRatingChange}
                  // placeholderRating={3.5}
                  emptySymbol={
                    <img
                      src={outlineHeart}
                      className="icon"
                      style={{ height: 40 }}
                    />
                  }
                  placeholderSymbol={
                    <img
                      src={fullHeart}
                      className="icon"
                      style={{ height: 40 }}
                    />
                  }
                  fullSymbol={
                    <img
                      src={fullHeart}
                      className="icon"
                      style={{ height: 40, color: "red" }}
                    />
                  }
                  fractions={2}
                  stop={5}
                />
              </div>
              <br />
            <div className="review-textfield-and-button-div">
              <TextField
                id="filled-multiline-flexible"
                label="Write a review and upload a selfie or other interesting photo"
                multiline
                rowsMax="15"
                onChange={e => setReview(e.target.value)}
                className={classes.textField}
                margin="normal"
                style={{ backgroundColor: "white", fontFamily: 'Vollkorn' }}
                variant='filled'
              />
              <br />
              <div className="review-buttons-div">
                <AddImage images={images} setImages={setImages} setLoading={setLoading} loading={loading}/>
                {loading
                  ?
                    <Loader 
                      type="Hearts"
                      color="#EF4E4E"
                      height="25"	
                      width="25"
                    />
                  :
                    <Button
                      className="review-submit-button"
                      size="small"
                      variant="contained"
                      color="primary"
                      style={{ color: "white", fontWeight: 600, fontSize: 16 }}
                      onClick={leaveReview}
                    >
                      Submit
                    </Button>
                }
              </div>
            </div>
            {images.map((e, i) => {
              return(
                <img key={i} src={e.url} alt='review image' style={{height: '50px', margin: '10px'}} className={`review_image_${e.exif}`}/>
              )
            })}
          </CardContent>
        ) : (
          <CardContent
            className="profile-main-card-content"
            style={{ marginTop: "35px" }}
          >
            <Typography
              variant="h2"
              className="write-a-review"
              color="primary"
              style={{ fontSize: 46 }}
            >
              Login to leave a review!
            </Typography>
          </CardContent>
        )}
        <CardActions className="description-card-button" />
      </Card>
    </div>
  );
}

ReviewForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ReviewForm);
