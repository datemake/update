import React, { useState, useEffect } from "react";
import axios from "axios";
import {connect} from "react-redux"
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import firebase from 'firebase/app';

import {inputReview} from "../../ducks/reducer"

//components

//css
import "./review.css";

const styles = {
  card: {
    width: '40vw',
    // marginBottom: "150px",
    // marginTop: "150px",
    display: "flex",

    justifyContent: 'center'
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
      width: 700
  }
};
function ReviewForm(props) {
  const { classes,reviewInput } = props;
  console.log(props)
  
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
  const [myUser,setMyUser] = useState([])
  const [reviews,setReviews] = useState([])

  useEffect(() => {
    checkUser()
}, [])
  function checkUser(){
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
       console.log(user.uid)
       setMyUser(user)
      })
    }
    const leaveReview = () => {
      console.log(myUser)

    // axios.post("/api/review",{reviewInput,id:props.match.params.dateId,user_id:user.uid}).then(response => {
    //   console.log(response)
    //   setReviews(response.data)
    // })
  }
  return (
    <div className="review-form-component">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <CardContent className="profile-main-card-content">
          <Typography
            variant="h2"
            className="write-a-review"
            color="primary"
            style={{fontSize: 36 }}
          
          >
            Leave a review
            <br />
         
          </Typography>
          
    
<div className="review-textfield-and-button-div">
          <TextField
            id="filled-multiline-flexible"
            label="Write a review and upload a selfie or other interesting photo"
            multiline
            rowsMax="15"
            onChange={(e) => props.inputReview(e.target.value)}
            className={classes.textField}
            margin="normal"
            style={{ backgroundColor: "white" }}
            variant="filled"
          />
              <br />
          <div className="review-buttons-div">
           <Button
                 className="review-upload-button"
                  size="small"
                  variant="contained"
                
                  style={{ color: "white", fontWeight: 600, fontSize: 16, backgroundColor: 'gray' }}
                >
              Upload
                </Button>
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
                </div>
                </div>
        </CardContent>
        <CardActions className="description-card-button" />
      </Card>
    </div>
  );
}
const mapStateToProps = state => {
   const {reviewInput} = state
   return {
    reviewInput
   }
}
ReviewForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      inputReview
    }
  )(ReviewForm)
);
