import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';

//css
import "./date.css"
import hotChocolate from "../../photos/hotChocolate.jpg"


const styles = {
    card: {
      width: 700,
      display: 'block'
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

 <div className='date_cards'>
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <CardContent>
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
            
        </CardContent>
      </Card>
    </div>
)
}
DateImages.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(DateImages);