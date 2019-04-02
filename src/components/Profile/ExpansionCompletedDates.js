import React from "react";

//redux
import {Link} from 'react-router-dom'

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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
//css
import "../form/form-activity.css";

const styles = theme => ({
  root: {
    width: 1100,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  card: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
  dates: {
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-around",
    flexWrap: "wrap",
    overflowY: 'scroll'
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
      <ExpansionPanel style={{overflowY: 'scroll'}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6"    style={{ fontWeight: 600 }}>View your Completed Dates</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
        <div className={classes.dates}>
            {props.completedDates.map((e, i) => {
                return (
                  <Link to={`/date/${e.date_id}`} key={i} style={{textDecoration: 'none'}}>
                         <Card id='completed_date_card'>
                            <CardActionArea >
                                <CardMedia
                                className={classes.media}
                                image={e.memory_photo}
                                title="Activity Photo"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {e.date_name}
                                </Typography>
                                <Typography component="p">
                                    {e.username}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                      </Link>
        
                )
            })}
        </div>
        </ExpansionPanelDetails>
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
