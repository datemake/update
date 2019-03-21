import React from "react";
import { Link } from "react-router-dom";

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
import "./form-activity.css";

//other components
import TextfieldFL from "./TextfieldFL";
import ExpansionOneActivity from "./ExpansionOneActivity";
import ExpansionTwoActivity from "./ExpansionTwoActivity";

const styles = {
  card: {
    width: 1000,
    minheight: 1145,
    marginTop: 65,
    marginBottom: 65
  },

  title: {
    fontSize: 12
  }
};

function FormFood(props) {
  const { classes } = props;
  return (
    <div className="main-form-activity-div">
      <Card className={classes.card} style={{ backgroundColor: "#white" }}>
        <div className="form-activity-inner-card">
          <CardContent className="activity-card-content">
            <div className="form-activity-title">
              <Typography variant="h3" className="activity-main-question">
              Choose your food experience <br />
                <br />
           
              </Typography>
            </div>
            <div  className="activity-instructions">
            <Typography
              variant="h5"
             
              style={{ fontWeight: 200 }}
            >
                No date is complete without a meal or something sweet, or even just coffee at a cute cafe. Type in the exact name of the establishment where you will partake in your food/beverage experience, or see
              a list of results based on your search term. For example:
              "Gelato shops."
              <br />
              <br />

            </Typography>
            </div>
            <div className="form-activity-textfield">
              {/* <TextfieldFL placeholder="Search term or establishment name"/> */}
              <Textfield
               id="outlined-bare"
     className={classes.textField}
   //   defaultValue="string"
  //  placeholder={placeholder}
     margin="normal"
     variant="outlined"
     style={{width: 700, height: 30}}
     
            />
            </div>

     
     <br />
            <br />
            <br />
            <ExpansionOneActivity/>
            <br />
              <br />
         
            <div className="form-activity-search-results-div" />
            <Typography
              variant="h5"
              className="activity-text-choose-picture"
              style={{ fontWeight: 200 }}
            >
            Choose a picture to represent your food experience.
              <br />
              <br />
              {/* <div className="form-activity-search-results-div" /> */}
              <ExpansionTwoActivity/>
              <br />
              <br />
            </Typography>
            {/* <div className="form-activity-search-results-div" /> */}
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
                Write one descriptive sentence to give users the main gist of what they can expect on the food/beverage part of the date.
              <br />
              <br />
            </Typography>
            <div className="form-activity-textfield">
            <Textfield
               id="outlined-bare"
     className={classes.textField}
   //   defaultValue="string"
  //  placeholder={placeholder}
     margin="normal"
     variant="outlined"
     style={{width: 700, height: 30}}
     
            />
            </div>
            <CardActions className="card-button">
              <Link to={"/create-date-memory"} className="form-link">
                <Button
                  size="small"
                  variant="raised"
                  color="primary"
                  style={{ color: "white", fontWeight: 600, fontSize: 16 }}
                >
                  Next
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

FormFood.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormFood);
