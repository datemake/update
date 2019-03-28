import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  inputActivity,
  inputFood,
  inputMemoryDescription
} from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Textfield from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

//css
import "../date/date.css";
import hotChocolate from "../../photos/hotChocolate.jpg";

const styles = {
  root: {
    width: 900,
    minheight: 700,
    marginLeft: 10
  },

  card: {
    minWidth: 900,
    backgroundColor: "#white",
    marginBottom: 125,

    display: "flex",
    justifyContent: "center"
  },

  header: {
    display: "flex",
    justifyContent: "center"
  },
  media: {
    height: 200,
    width: 200,
    objectFit: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  media2: {
    height: 200,
    width: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
};

function FormReviewImages(props) {
  const { classes } = props;
  const [boxOne, setBoxOne] = useState(false);

  return (
    <div className="form-review-images-card">
      <Card className={classes.card}>
        <CardContent style={{ paddingBottom: 0 }} className={classes.root}>
          <div className="activity-description-fri">
            <Typography variant="h5" gutterBottom>
              Activity description: {props.describeActivity}
            </Typography>
            <div className="big-image">
              <CardMedia
                className={classes.media}
                image={props.activityPhotoURL}
                title="date activity"
              />
            </div>
          </div>
          <div className="bottom_images_div">
            <div className="activity-description-fri">
              <Typography variant="h5" gutterBottom>
                Food description: <br /> {props.describeFood}
              </Typography>
              <div className="lower-imgs">
                <CardMedia
                  className={classes.media2}
                  image={props.foodPhotoURL}
                  title="date food"
                />
              </div>
            </div>
            <div className="activity-description-fri">
              <Typography variant="h5" gutterBottom />
              <div className="lower-imgs">
                <CardMedia
                  className={classes.media2}
                  image={props.memoryPhotoURL}
                  title="date memory maker"
                />
              </div>
            </div>
          </div>
          <div className="form-revew-button">
            <Button
              onClick={() => setBoxOne(true)}
              size="small"
              variant="outlined"
              color="primary"
              style={{
                color: "primary",
                fontWeight: 600,
                fontSize: 16,
                marginBottom: 10
              }}
            >
              Edit
            </Button>
          </div>
        </CardContent>

{/* ////Still need to add ability to edit photos into this dialog */}
        <Dialog
          className={classes.dialogue}
          open={boxOne}
          onClose={() => setBoxOne(false)}
        >
          <div className="box-one">
            <Typography
              variant="h5"
              className="main-question"
              style={{ fontWeight: 200 }}
            >
              Edit name, activity, food, memory description.
              <br />
              <br />
            </Typography>

            <Textfield
              id="outlined-bare"
              className={classes.textField}
              onChange={e => props.inputActivity(e.target.value)}
              margin="normal"
              variant="outlined"
              placeholder={props.describeActivity}
            />

            <Textfield
              onChange={e => props.inputFood(e.target.value)}
              id="outlined-bare"
              className={classes.textField}
              margin="normal"
              placeholder={props.describeFood}
              variant="outlined"
            />

            <Textfield
              onChange={e => props.inputMemoryDescription(e.target.value)}
              id="outlined-bare"
              placeholder={props.describeMemory}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </div>
        </Dialog>
      </Card>
    </div>
  );
}

const mapStateToProps = state => state;

FormReviewImages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(mapStateToProps)(FormReviewImages));
