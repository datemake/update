import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {} from "../../ducks/reducer";

//material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Restaurant, LocalActivity, PhotoCamera } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Textfield from "@material-ui/core/TextField";
import TextField from "@material-ui/core/TextField";

//css
import "../date/date.css";

const styles = {
  dialogue: {
    display: "flex",
    flexDirection: "column"
  },
  textfield: { marginBottom: 10, maxWidth: 1000 },

  card: {
    // minWidth: 375,
    width: 800
    // maxHeight: '80vh'
  },
  pos: {
    marginBottom: 10
  }
};

function FormReviewDescription(props) {
  const [boxOne, setBoxOne] = useState(false);
  const [boxTwo, setBoxTwo] = useState(false);

  const { classes } = props;

  console.log(props.date);
  return (
    <div className="date_cards">
      <Card className={classes.card}>
        <CardContent>
          <Typography
            variant="h2"
            gutterBottom
            style={{ textDecoration: "underline", textAlign: "center" }}
          >
            date name here
            {/* {props.date_name} */}
          </Typography>
          <div className="short_description_div">
            <LocalActivity color="primary" style={{ marginRight: "15px" }} />
            <Typography variant="h4">Activity-</Typography>
            <Typography
              variant="h5"
              style={{ width: "100%", marginTop: "5px", fontWeight: "400" }}
            >
              activity description here
              {/* {props.activity_description} */}
            </Typography>
          </div>
          <div className="short_description_div">
            <Restaurant color="primary" style={{ marginRight: "15px" }} />
            <Typography variant="h4">Food-</Typography>
            <Typography
              variant="h5"
              style={{ width: "100%", marginTop: "5px", fontWeight: "400" }}
            >
              food description here
              {/* {props.food_description} */}
            </Typography>
          </div>
          <div className="short_description_div">
            <PhotoCamera color="primary" style={{ marginRight: "15px" }} />
            <Typography variant="h4">Memory-</Typography>
            <Typography
              variant="h5"
              style={{ width: "100%", marginTop: "5px", fontWeight: "400" }}
            >
              memory description here
              {/* {props.memory_description} */}
              <Button
                onClick={() => setBoxOne(true)}
                size="small"
                variant="contained"
                color="primary"
                style={{ color: "white", fontWeight: 600, fontSize: 16 }}
              >
                Edit
              </Button>
              {/* //Modal to edit name, activity, food, memory description: */}
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
                    //   defaultValue="string"
                    placeholder={props.dateName}
                    //               value={name}
                    margin="normal"
                    variant="outlined"
                    onChange={e => props.inputDateName(e.target.value)}
                  />

                  <Textfield
                    id="outlined-bare"
                    className={classes.textField}
                    onChange={e => props.inputActivity(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    placeholder={props.describeActivity}
                  />
                  {/* </MuiDialogContent> */}

                  <Textfield
                    onChange={e => props.inputFood(e.target.value)}
                    id="outlined-bare"
                    className={classes.textField}
                    //   defaultValue="string"
                    //  placeholder={placeholder}
                    margin="normal"
                    placeholder={props.describeFood}
                    variant="outlined"
                    
                  />

                  <Textfield
                    onChange={e => props.inputMemoryDescription(e.target.value)}
                    id="outlined-bare"
                    placeholder={props.describeMemory}
                    className={classes.textField}
                    //   defaultValue="string"
                    //  placeholder={placeholder}
                    margin="normal"
                    variant="outlined"
              
                  />
                </div>
              </Dialog>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card} style={{ marginTop: "25px" }}>
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            style={{ textAlign: "left", fontWeight: "400" }}
          >
            date description here date description here date description here
            date description here
            {/* {props.date_description} */}
            <Button
              onClick={() => setBoxTwo(true)}
              size="small"
              variant="contained"
              color="primary"
              style={{ color: "white", fontWeight: 600, fontSize: 16 }}
            >
              Edit
            </Button>
     {/* //Modal to date description: */}
            <Dialog open={boxTwo} onClose={() => setBoxTwo(false)}>     <div className="box-two">
              
            <TextField
              id="filled-multiline-flexible"
              label="Write your description"
              multiline
              rowsMax="15"
              placeholder={props.inputDescription}
              value={props.dateDescription}
              onChange={e => props.inputDateDescription(e.target.value)}
              className={classes.textField}
              margin="normal"
              style={{ backgroundColor: "white" }}
              variant="filled"
            />
              </div>
            </Dialog>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
// FormReviewDescription.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(FormReviewDescription);

const mapStateToProps = state => state;

FormReviewDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(mapStateToProps)(FormReviewDescription)
);
