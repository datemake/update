import React, { useState } from "react";
import { Link } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { inputDateDescription } from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

//css
import "./form.css";
import "./form-description.css";

//other components

const styles = {
  card: {
    width: 1000,

    minheight: 1245,
    marginTop: 55,
    marginBottom: 55
  },

  title: {
    fontSize: 12
  },
  textField: {
    width: 700
  }
};

function FormLanding(props) {
  const { classes } = props;

  return (
    <div className="main-form-description-div">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="form-inner-card">
          <CardContent className="form-description-card-content">
            <Typography variant="h3" className="main-question">
              Describe Your Date <br />
              <br />
            </Typography>
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
              Your date description will help others to understand how they can
              experience the date you created in the way that you imagine. Give
              them tips, descriptive details, and instructions.
              <br />
              <br />
            </Typography>

            <TextField
              id="filled-multiline-flexible"
              label="Write your description"
              multiline
              rowsMax="15"
              value={props.dateDescription}
              onChange={e => props.inputDateDescription(e.target.value)}
              className={classes.textField}
              margin="normal"
              style={{ backgroundColor: "white" }}
              variant="filled"
            />
          </CardContent>
          <CardActions className="description-card-button">
            <Link to={"/create-date-review"} className="form-link">
              <Button
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
const mapStateToProps = state => state;

FormLanding.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { inputDateDescription }
  )(FormLanding)
);
