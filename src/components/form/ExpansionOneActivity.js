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
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

//css
import "./form-activity.css";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

/////
function SimpleExpansionPanel(props) {
  const { locationData, classes, inputActivity } = props;

  let searchResultsList = props.allMatchingActivityLocations.map(
    (element, index) => {
      return (
        <div key={element.id} className="matching-activity-locations-div">
          <div>
            <b>{props.allMatchingActivityLocations[index].name}</b>
          </div>
          <div className="matching-activity-locations-address">
            {props.allMatchingActivityLocations[index].formatted_address}
            <Checkbox
              color="primary"
              onChange={() =>
                props.getSpecificActivity(
                  props.allMatchingActivityLocations[index].place_id
                )
              }
            />
          </div>
        </div>
      );
    }
  );

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
        <ExpansionPanelSummary>
          <div className="see-results-button">
            <Typography className={classes.heading}>
              <Button
                onClick={getMatching}
                size="small"
                variant="text"
                color="primary"
                style={{ color: "primary", fontWeight: 600, fontSize: 16 }}
              >
                See Results
              </Button>
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="h6">{searchResultsList}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

///////

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {
    locationData,
    inputActivity,
    allMatchingActivityLocations,
    specificActivity
  } = state;
  return {
    locationData,
    inputActivity,
    allMatchingActivityLocations,
    specificActivity
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      getMatchingActivities,
      getSpecificActivity
    }
  )(SimpleExpansionPanel)
);
