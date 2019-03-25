import React from "react";

//redux
import { connect } from "react-redux";
import {
  getMatchingActivities,
  getSpecificActivity
} from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Button from "@material-ui/core/Button";
// import Checkbox from "@material-ui/core/Checkbox";

//css
import "../form/form-activity.css";

const styles = theme => ({
  root: {
    width: 1100
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

/////
function SimpleExpansionPanel(props) {
  const { locationData, classes, inputActivity } = props;

  
  console.log(props.specificActivity);

  const getMatching = () => {
    if (locationData.results.length) {
      const activityLocation = locationData.results[0].geometry.location;

      props.getMatchingActivities(
        inputActivity,
        activityLocation.lat + "," + activityLocation.lng
      );
    }
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6"    style={{ fontWeight: 600 }}>View your Saved Dates</Typography>
        </ExpansionPanelSummary>
       
      </ExpansionPanel>
    </div>
  );
}

///////

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state =>  state;
  


export default withStyles(styles)(
  connect(
    mapStateToProps,
    {

 
    }
  )(SimpleExpansionPanel)
);
