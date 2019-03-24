import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//redux
import { connect } from "react-redux";
import { inputDateName } from "../../ducks/reducer";

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

//other components

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

function FormLanding(props) {
  const { classes } = props;
 

 

  return (
    <div className="main-form-div">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="form-inner-card">
          <CardContent className="card-content">
            <Typography variant="h3" className="main-question">
              Create a Date! <br />
              <br />
            </Typography>
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
              What would you like to call your date? Give it an eye-catching
              name.
              <br />
              <br />
            </Typography>

            {/* // As the user types in the name, we keep that state/name in redux as 'dateName' */}
            <Textfield
              id="outlined-bare"
              className={classes.textField}
              //   defaultValue="string"
              //  placeholder={placeholder}
              //               value={name}
              margin="normal"
              variant="outlined"
              style={{ width: 700, height: 30 }}
              onChange={(e) => props.inputDateName(e.target.value)}

            />
          </CardContent>
          <CardActions className="card-button">
            <Link to={"/create-date-location"} className="form-link">
              <Button

                // onClick={nameDate}
                size="small"
                variant="contained"
                color="primary"
                style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >
                Next
              </Button>
            </Link>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
const mapStateToProps = state => {
  const { dateName} = state;
  return {
    dateName,
  

  };
};

FormLanding.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { inputDateName }
  )(FormLanding)
);
