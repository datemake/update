import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReviewMain from '../reviews/ReviewMain'
//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

//css
import "./date.css"
import hotChocolate from "../../photos/hotChocolate.jpg"


const styles = {
    card: {
      width: '45vw',
      backgroundColor: "#white",
      marginBottom: 125
    },
    media: {
      height: 400,
      objectFit: 'cover'
    },
    media2: {
      height: 200,
      width: 300,
    },
  };
  

function DateImages(props) {
    const { classes } = props;

    
return(

 <div className='date_images_cards'>
      <Card className={classes.card}>
        <CardContent style={{paddingBottom: 0}}>
          <Typography variant="h4" gutterBottom>
                {props.date.activity_description}
          </Typography>
          <CardMedia
                className={classes.media}
                image={props.date.activity_photo}
                title="Paella dish"
              />
            <div id='bottom_images_div'>
              <div>
              <Typography variant="h4" gutterBottom>
                {props.date.food_description}
              </Typography>
                <CardMedia
                  className={classes.media2}
                  image={props.date.food_photo}
                  title="Paella dish"
                />
              </div>
              <div>
              <Typography variant="h4" gutterBottom>
                {props.date.memory_description}
              </Typography>
                <CardMedia
                  className={classes.media2}
                  image={props.date.memory_photo}
                  title="Paella dish"
                />
              </div>
            </div>
            <div id='see_reviews'>
              <Typography variant='h6'>See</Typography>
              <KeyboardArrowDown/>
              <Typography variant='h6'>Reviews</Typography>
            </div>
        </CardContent>
      </Card>
      <ReviewMain date_id={props.date.date_id}/>

    </div>
)
}
DateImages.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(DateImages);