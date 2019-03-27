import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//css
import "./Profile.css";
// import { ExpansionPanel } from "@material-ui/core";

import ExpansionSavedDates from "./ExpansionSavedDates";

const styles = {
  card: {
    width: 1200,
    // height: 1000,
    marginTop: 45
    //   marginBottom: 65
  },

  title: {
    fontSize: 12
  }
};

function SavedDates(props) {
  const { classes } = props;
  console.log(props)
  const [savedDates, setSavedDates] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       '/api/completedDates',
  //     );
  //     console.log(result.data)
  //     setSavedDates(result.data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <Card className={classes.card} style={{ backgroundColor: "#white" }}>
      <div className="profile-saved-dates-card">
        <CardContent className="profile-saved-dates-card-content">
          <Typography
            className="saved-dates"
            variant="h3"
            color="primary"
            style={{ fontWeight: 600 }}
          >
            Saved Dates
          </Typography>
          <ExpansionSavedDates savedDates={props.savedDates}  />
        </CardContent>
      </div>
    </Card>
  );
}
SavedDates.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SavedDates);
