import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar"

import Rating from "react-rating";
import AddImage from "./AddImage";
import outlineHeart from "../../photos/outline-heart.png";
import fullHeart from "../../photos/full-heart.png";

//css
import "./review.css";

const styles = {
  card: {
    width: '42vw',
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
  console.log(reviews)
  return (
    <div className="review-component">
      {reviews.map((e,i) => {
        let fixedImagesSecond = ''
        if(e.images){
          let fixedImagesInitial = e.images.replace(/[\\"]/gi, '').split('},{')
          fixedImagesSecond = fixedImagesInitial.map((e, i) => {
            let cleanedUp1 = e.replace(/(url:)/gi, '')
            let cleanedUp2 = cleanedUp1.replace(/[{}]/gi, '').split(',')
            let exif1 = ''
            let url1 = ''
            if(cleanedUp2[0] !== ''){
              exif1 = cleanedUp2[1].replace(/^[^_]*:/, '')
            return {exif: exif1, url: cleanedUp2[0]}
            }
          })
        }
        console.log(fixedImagesSecond)
        return(
          <Card className={classes.card} style={{ backgroundColor: "#white" }} key={i}>
            <CardContent className="review-main-card-content">
            <div id='review_div_rating'>
              <div className="review-avatar-and-username">
                <Avatar src={e.profile_pic ? e.profile_pic : require('../../photos/user.png')}/>
                <Typography variant="h5" className="write-a-review" style={{ color: "gray", paddingLeft: '10px'}}>
                  {e.username}
                </Typography>
              </div>
              <Rating
                initialRating={e.rating}
                readonly
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
                    />}
              />
            </div>
            
              
              <div className="review-text">
                <Typography variant="h6" className="write-a-review">
                  {e.review}
                  <br />
                </Typography>
              </div>
              {fixedImagesSecond[0]
                ?
                  <div id='review_images_div'>
                    {fixedImagesSecond.map((e, i) => {
                      return (
                        <img key={i} src={e.url} style={{width: '150px'}} className={`review_image_${e.exif}`}/>
                      )
                    })}
                   </div>
                  
                :
                  null
              }
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
