import React from "react";

//redux
import { connect } from "react-redux";
import {
  getMatchingFood,
  getSpecificFood
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
  
  const { locationData, classes, inputFood } = props;

  

  let searchResultsList = props.allMatchingFoodLocations.map(
    (element, index) => {
      return (
        <div key={element.id} className="matching-activity-locations-div">
          <div>
            <b>{props.allMatchingFoodLocations[index].name}</b>
          </div>
          <div className="matching-activity-locations-address">
            {props.allMatchingFoodLocations[index].formatted_address}
            <Checkbox
              color="primary"
              onChange={() =>
                props.getSpecificFood(
                  props.allMatchingFoodLocations[index].place_id
                )
              }
            />
          </div>
        </div>
      );
    }
  );



  const getMatching = () => {

    if (locationData.results.length) {
      const foodLocation = locationData.results[0].geometry.location;

      props.getMatchingFood(
        inputFood,
        foodLocation.lat + "," + foodLocation.lng
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
          <Typography variant="h6">
            {searchResultsList}
          </Typography>
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
    inputFood,
    allMatchingFoodLocations,
    specificFood
  } = state;
  return {
    locationData,
    inputFood,
    allMatchingFoodLocations,
    specificFood
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      getMatchingFood,
      getSpecificFood
    }
  )(SimpleExpansionPanel)
);
