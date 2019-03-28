import React from "react";
import PropTypes from "prop-types";

//redux
import { connect } from "react-redux";
import { addFoodPhotoURL } from "../../ducks/reducer";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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

function SimpleExpansionPanel(props) {
  const { classes } = props;



  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading} />
        </ExpansionPanelSummary>
        <div className="expansion-panel-two">
          <ExpansionPanelDetails className="expansion-two-photos-div">
            <Typography variant="h6">
              {props.specificFood.result 
                  ? 
                    <div>
                      {props.specificFood.result.photos.map((e, i) => {
                        return(
                          <div className="expansion-panel-two-photo-and-checkbox-div" key={i}>
                            <div className="expansion-panel-two-photo-and-checkbox-text">
                              Choose this photo
                              <Checkbox
                                id="0"
                                color="primary"
                                onClick={() => props.addFoodPhotoURL(
                                  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                                    e.photo_reference
                                  }&key=${process.env.REACT_APP_GOOGLE}`
                                )}
                              />
                            </div>
                              <img
                                className="expansion-two-photos"
                                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&maxheight=300&photo_reference=${
                                  e.photo_reference
                                }&key=${process.env.REACT_APP_GOOGLE}`}
                              />
                          </div>
                        )
                      })}
                    </div>
                  :
                      <div></div>
                } 
            </Typography>
          </ExpansionPanelDetails>
        </div>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {
    
    inputFood,
    allMatchingFoodLocations,
    specificFood
  } = state;
  return {
    
    inputFood,
    allMatchingFoodLocations,
    specificFood
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      addFoodPhotoURL
    }
  )(SimpleExpansionPanel)
);
