import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";
//css
import "./date.css";

const styles = {
  card: {
    width: 700,
    height: 775,
    marginTop: 95,
    marginBottom: 65,
    textAlign: "center",
    // backgroundColor: "#fff9c4"
    backgroundColor: "lightgrey"
  },

  title: {
    fontSize: 12
  },
  avatar: {
    backgroundColor: red[500],
    margin: 10,
    width: 60,
    height: 60
  }
};

function DateDescription(props) {
  const { classes } = props;

  return (
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
              <div className="date_summary">
                <h2>The French Connection</h2>
                <div className="summaries">
                   <h3><i class="fas fa-hiking"></i>Activity- <span>French Film at Le Art Museum</span></h3>
                   <h3><i class="fas fa-utensils"></i>Food- <span>French Film at Le Art Museum</span></h3>
                   <h3><i class="fas fa-camera"></i>Memory- <span>French Film at Le Art Museum</span></h3>
                </div>
               </div>
              <div className="date_description">
                <h4>French Mixtape Scenery</h4>
                <p className="describe">
                  The movie theatre is this really cool antique style of architecture from 1800 France. Or something like that
                  I'm making this up as I go. It was pretty romantic though. Cuz it was french related.
                </p>
                <h4>The Blank</h4>
                <p className="describe">
                  It's a high-end five-star restaurant with a theme around 
                </p>
                <h4>Century Memories</h4>
                <p className="describe">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </p>
         
            </div>
              {/* <div className="date_summary" />
              <div className="date_description" />
              <div className="date_summary" />
              <div className="date_description" /> */}
      </Card>
  );
}
DateDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateDescription);
