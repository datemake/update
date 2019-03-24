import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//redux
import { connect } from "react-redux";
import { getUserLocation, inputLocation  } from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Textfield from "@material-ui/core/TextField";

//css
import "./form.css";



const styles = {
  card: {
    width: 1000,
    height: 575,
    marginTop: 65,
    marginBottom: 65
  },

  title: {
    fontSize: 12
  }
};

function FormLocation(props) {
  const { classes } = props;
  // const [data, setData] = useState([]);

  const getLocation = () => {
    props.getUserLocation(props.location);
  };

  console.log(props);
  return (
    <div className="main-form-div">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="form-inner-card">
          <CardContent className="card-content">
            <Typography variant="h3" className="main-question">
              Enter your location
              <br />
              <br />
            </Typography>
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
              Choose a starting point. You can enter a city, a zipcode, or even
              your home address.
              <br />
              <br />
            </Typography>
            <Textfield
              id="outlined-bare"
              className={classes.textField}
              //   defaultValue="string"
              //  placeholder={placeholder}
              onChange={(e) => props.inputLocation(e.target.value)}
              margin="normal"
              variant="outlined"
              style={{ width: 700, height: 30 }}
            />
          </CardContent>
          <CardActions className="card-button">
            <Link to={"/create-date-activity"} className="form-link">
              
              <Button
                onClick={getLocation}
                size="small"
                variant="contained"
                color="primary"
                style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >
                Next
              </Button>
              {/* {data.map(item => (
                <div key={item}>{item}</div>
              ))} */}
            </Link>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

FormLocation.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    locationData: state.locationData,
    dateName: state.dateName,
    location: state.location
  };
};

export default connect(
  mapStateToProps,
  { getUserLocation,inputLocation }
)(withStyles(styles)(FormLocation));
