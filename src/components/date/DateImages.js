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
      height: 775,
      marginTop: 95,
      marginBottom: 65,
      display: "flex",
      flexWrap: "wrap",
    overflowY: "scroll",
      justifyContent: "center"
    },
    title: {
      fontSize: 12
    },
    media: {
      height: "40%",
      // paddingTop: '56.25%', // 16:9
      display: "in-line",
      width: "90%",
    },
    media2: {
      height: "50%",
      // paddingTop: '56.25%', // 16:9
      marginRight: "1%",
      width: "45%",
      display: "in-line",
    },
    media3: {
      height: "50%",
      // paddingTop: '56.25%', // 16:9
      marginLeft: "1%",
      width: "45%"
    },
    others2: {
      display: "flex"
    },
    type: {
      display: "block"
    }
  };
  

function DateImages(props) {
    const { classes } = props;
    



return(

 <div>
       {/* <img src={hotChocolate} className="date-main-image"></img> */}
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
      <div className={classes.first}>
      </div>

      <CardMedia
          className={classes.media}
          image={hotChocolate}
          title="Paella dish"
        />
        <div>

        <CardContent>
        <Typography variant="h4" gutterBottom>
        Activity Description
      </Typography>
        </CardContent>
        </div>
        <CardMedia
          className={classes.media2}
          image={hotChocolate}
          title="Paella dish"
        />
        
        <CardMedia
          className={classes.media3}
          image={hotChocolate}
          title="Paella dish"
        />
      </Card>
    </div>
)
}
DateImages.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(DateImages);